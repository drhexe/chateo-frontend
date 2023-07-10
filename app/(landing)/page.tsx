import Link from "next/link";
import ChateoIcon from "./assets/icons/logo.svg";
import GoogleIcon from "./assets/icons/google.svg";
import AppleIcon from "./assets/icons/apple.svg";
import FacebookIcon from "./assets/icons/facebook.svg";
import { IconButton } from "./icon-button.component";
import { Divider } from "./divider.component";
import { Button } from "./button.component";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] relative overflow-hidden p-6 h-[100dvh]">
      <div className="top-0 absolute w-full opacity-60 rounded-[557px] -rotate-[150deg] scale-125 bg-[linear-gradient(277deg,_#43116A_0%,_#0A1832_100%)] aspect-[3/4] blur-3xl" />
      <div className="relative flex flex-col h-full">
        <div className="flex gap-[6px] items-center justify-center px-5 mb-12">
          <ChateoIcon />
          Chatbox
        </div>
        <h1 className="text-[4.25rem] leading-[4.88rem] font-normal mb-4">
          Connect friends <span className="font-bold">easily & quickly</span>
        </h1>
        <h2 className="text-[#B9C1BE] mb-9">
          Our chat app is the perfect way to stay connected with friends and
          family.
        </h2>
        <div className="flex items-center justify-center gap-6 mb-9">
          <IconButton icon={<FacebookIcon />} />
          <IconButton icon={<GoogleIcon />} />
          <IconButton icon={<AppleIcon />} />
        </div>
        <Divider>OR</Divider>
        <Button>Sign up withn mail</Button>
        <div className="mt-auto w-full text-center text-[#B9C1BE] mb-2">
          Existing account?{" "}
          <Link className="text-white font-semibold" href="#">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
