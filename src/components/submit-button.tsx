'use client'

import { useFormStatus } from 'react-dom'
import { Button, ButtonProps } from '@/components/ui/button'
import { LoaderIcon } from 'lucide-react'

export const SubmitButton = ({ children, disabled, ...props }: ButtonProps) => {
  const { pending } = useFormStatus()
  const isDisabled = pending || disabled

  return (
    <Button {...props} disabled={isDisabled}>
      {pending ? <LoaderIcon className='animate-spin' /> : children}
    </Button>
  )
}
