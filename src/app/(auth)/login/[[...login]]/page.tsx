import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <SignIn />
    </div>
  )
}

export default SignInPage
