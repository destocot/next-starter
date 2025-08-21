import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SignupForm } from '@auth/comps/signup-form'
import Link from 'next/link'

export const Signup = () => {
  return (
    <Card className='relative w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Complete your <span className='font-medium'>sign up</span> to get started
        </CardDescription>
      </CardHeader>

      <CardContent>
        <SignupForm />
      </CardContent>

      <CardFooter className='block'>
        Already have an account?{' '}
        <Button variant='link' className='px-0 text-base'>
          <Link href='/signin'>Sign in</Link>
        </Button>
      </CardFooter>

      <div className='text-card bg-card-foreground pointer-events-none absolute top-24 -left-5.25 origin-top-left -rotate-90 rounded-t-sm px-3 text-sm shadow-sm'>
        KHRM
      </div>
    </Card>
  )
}
