import { SignUp } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <SignUp signInUrl='/login' />
    </div>
  )
}

export default SignInPage
