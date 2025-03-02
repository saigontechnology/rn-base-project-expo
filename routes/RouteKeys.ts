export const RouteKeys = {
  // auth
  SignIn: '/sign-in',
  SignUp: '/sign-up',
  ForgotPassword: '/forgot-password',

  // protected app
  Home: '/home',
  AuthStack: '/auth-stack',
  SplashScreen: '/splash-screen',
} as const

export const RouteNames = {
  // stack
  AuthStack: '(auth)',
  AppStack: '(app)',
  Root: 'index',
  NotFound: '+not-found',

  // auth
  SignIn: 'sign-in',
  SignUp: 'sign-up',
  ForgotPassword: 'forgot-password',

  // protected app
  Home: 'home',
  About: 'about',
} as const
