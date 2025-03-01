import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid min-h-screen place-content-center">
      <SignIn fallbackRedirectUrl={"/character-selection"} />
    </div>
  );
}
