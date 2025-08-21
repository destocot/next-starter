import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SigninForm } from '@auth/comps/signin-form'
import Link from 'next/link'

export const Signin = () => {
  return (
    <Card className='relative w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your account details to <span className='font-medium'>sign in</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <SigninForm />
      </CardContent>

      <CardFooter className='block'>
        Don&apos;t have an account?{' '}
        <Button variant='link' className='px-0 text-base'>
          <Link href='/signup'>Sign up</Link>
        </Button>
      </CardFooter>

      <div className='text-card bg-card-foreground pointer-events-none absolute top-24 -left-5.25 origin-top-left -rotate-90 rounded-t-sm px-3 text-sm shadow-sm'>
        KHRM
      </div>
    </Card>
  )
}
