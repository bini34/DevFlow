import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
function Navbar() {
  return (
    <nav className=" flex-between background-light900_dark200 fixed z-50 w-full gap-5 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevFlow"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      <div className="flex-between gap-5">
      <Theme/>
        <SignedIn>
          <UserButton
            appearance={{
              variables: {
                colorPrimary: "#ff7000", // Set your desired primary color here
              },
              elements: {
                avatarBox: "h-10 w-10", // Customize avatar size
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
