const en = {
  auth: {
    title: 'Login to STS',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    signIn: 'Sign In',
    forgotPassword: 'Forgot Password?',
    createAccount: 'Create Account',
    signUp: 'Sign Up',
    alreadyHaveAnAccount: 'Already have an account?',
    resetPassword: 'Reset Password',
    sendResetEmail: 'Send Reset Email',
    backToSignIn: 'Back to Sign In',
    signOut: 'Sign Out',
    validation: {
      email: 'Invalid email',
      password: 'Password must be between 8 and 20 characters',
      confirmPassword: 'Confirm password does not match',
    },
    authenticate: 'Authenticating...',
    messages: {
      success: {
        signIn: 'Sign in successful',
        signUp: 'Sign up successful',
        resetPassword: 'Password reset successful',
      },
    },
  },
  home: {
    title: 'Home',
  },
  validations: {
    required: '{{field}} is required',
    invalid: '{{field}} is invalid',
  },
  messages: {
    error: '{{field}} failed',
    success: '{{field}} succeeded',
  },
  notExist: `This screen doesn't exist`,
  goToHome: 'Go to home screen!',
  search: 'Search...',
}

export type StringsObject = typeof en
export default en
