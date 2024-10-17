import { SignupForm } from "@/components/auth/signup-form";
import { ButtonLink } from "@/components/custom-ui/button-link";
import { Container } from "@/components/custom-ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="mt-8">
      <Container>
        <div className="flex justify-center gap-y-4">
          <Card className="w-full max-w-[380px] border-0 shadow-none sm:border sm:shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tight">
                Sign Up
              </CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
            <CardFooter>
              <div className="text-sm">
                Already have an account? Click{" "}
                <ButtonLink variant="link" href="/auth/signin" className="px-0">
                  here
                </ButtonLink>{" "}
                to sign in.
              </div>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </main>
  );
}
