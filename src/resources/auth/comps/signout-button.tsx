'use client'

import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { LoaderIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SignoutButtonProps {
  className?: string
}

export const SignoutButton = ({ className }: SignoutButtonProps) => {
  const [isPending, startTransition] = useTransition()

  async function handleSignout() {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 1000))
    })
  }

  return (
    <Button
      type='button'
      disabled={isPending}
      variant='destructive'
      onClick={handleSignout}
      className={cn('min-w-[88.67px]', className)}
    >
      {isPending ? <LoaderIcon className='animate-spin' /> : 'Sign Out'}
    </Button>
  )
}
