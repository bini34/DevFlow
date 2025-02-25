import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
function Home() {
  return (
    <div className="w-full min-h-screen">
      <UserButton/>
    </div>
  );
}

export default Home;
