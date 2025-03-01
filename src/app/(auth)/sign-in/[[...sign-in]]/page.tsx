import { SignIn } from "@clerk/nextjs"
function Page() {
  return (
    <SignIn signInFallbackRedirectUrl="/ask-question" />
  )
}

export default Page
