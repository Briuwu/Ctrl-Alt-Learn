import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <header className="py-6">
      <h1 className="font-bold text-2xl text-center uppercase mb-6">
        Ctrl + Alt + Learn
      </h1>
      <nav className="border-y-2 border-black">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center">
            <li>
              <Button
                asChild
                variant={"link"}
                className="hover:font-bold md:text-lg"
              >
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant={"link"}
                className="hover:font-bold md:text-lg"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </li>
          </ul>
          <SignedIn>
            <SignOutButton>
              <Button
                variant={"destructive"}
                className="text-white font-bold uppercase border-x-2 border-black rounded-none p-6"
              >
                Logout
              </Button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <SignUpButton
              mode="modal"
              fallbackRedirectUrl={"/character-selection"}
            >
              <Button className="bg-light-blue text-black font-bold uppercase border-x-2 border-black rounded-none p-6">
                Login
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
