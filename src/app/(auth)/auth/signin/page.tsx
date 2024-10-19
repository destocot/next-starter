import { SigninForm } from "@/components/auth/signin-form";
import { ButtonLink } from "@/components/custom-ui/button-link";
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
    <div className="flex h-fit flex-1 justify-center gap-y-4 self-center">
      <Card className="w-full border-0 shadow-none sm:max-w-[380px] sm:border sm:shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Sign In
          </CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm">
            Don&apos;t have an account? Click{" "}
            <ButtonLink variant="link" href="/auth/signup" className="px-0">
              here
            </ButtonLink>{" "}
            to sign up.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
