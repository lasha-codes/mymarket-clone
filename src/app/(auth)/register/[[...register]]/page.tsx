import { SignUp } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <SignUp />
    </div>
  )
}

export default SignInPage
