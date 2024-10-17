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

const generateUser = () => {
  return {
    email: "jsmith@example.com",
    password: "testing",
    name: "john_smith",
  };
};

const main = async () => {
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
