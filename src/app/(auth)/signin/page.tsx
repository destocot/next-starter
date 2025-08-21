import { Button } from '@/components/ui/button'
import { Signin } from '@auth/comps/signin'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function SigninPage() {
  return (
    <>
      <header className='h-16 border-b'>
        <div className='container flex h-full items-center'>
          <Button size='icon' className='size-8' asChild>
            <Link href='/'>
              <ArrowLeftIcon />
              <span className='sr-only'>Back</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className='flex min-h-[calc(100dvh-8rem)] items-center justify-center'>
        <Signin />
      </main>
    </>
  )
}
