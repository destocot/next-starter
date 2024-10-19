import { PrismaClient, type Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { hash } from "@node-rs/argon2";

const db = new PrismaClient();

const generatedPost = (): Omit<Prisma.PostCreateInput, "user"> => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
  };
};

const generateUser = (): Prisma.UserCreateInput => {
  return {
    email: "jsmith@example.com",
    password: "testing",
    name: "john_smith",
    image: "https://i.pravatar.cc/150?img=12",
  };
};

const main = async () => {
  const resetArg = process.argv[2];

  if (resetArg.trim().toLowerCase() === "reset") {
    await db.post.deleteMany();
    await db.user.deleteMany();
  }

  console.log("Creating user...");
  const user = generateUser();
  const hashed = await hash(user.password);

  const newUser = await db.user.create({
    data: { ...user, password: hashed },
  });

  console.log("Creating posts...");
  const posts: Array<Prisma.PostCreateManyInput> = Array.from(
    { length: 10 },
    () => {
      const post = generatedPost();
      return { ...post, userId: newUser.id };
    },
  );

  await db.post.createMany({ data: posts });

  console.log("Login with the following credentials:");
  console.log("Email:", newUser.email);
  console.log("Password:", user.password);
};

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
