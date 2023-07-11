import AppleIcon from '$lib/assets/icons/apple.svg';
import FacebookIcon from '$lib/assets/icons/facebook.svg';
import GoogleIcon from '$lib/assets/icons/google.svg';
import ChateoIcon from '$lib/assets/icons/logo.svg';
import { Button } from '$lib/components/button.component';
import { Divider } from '$lib/components/divider.component';
import { IconButton } from '$lib/components/icon-button.component';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="relative h-[100dvh] overflow-auto bg-[#1A1A1A] p-6">
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                <div className="absolute top-0 aspect-[3/4] w-full rotate-[-150deg] scale-125 rounded-[557px] bg-[linear-gradient(277deg,_#43116A_0%,_#0A1832_100%)] opacity-60 blur-3xl" />
            </div>
            <div className="relative flex h-fit flex-col">
                <div className="mb-12 flex items-center justify-center gap-[6px] px-5">
                    <ChateoIcon />
                    Chatbox
                </div>
                <h1 className="mb-4 text-[4.25rem] font-normal leading-[4.88rem]">
                    Connect friends{' '}
                    <span className="font-bold">easily & quickly</span>
                </h1>
                <h2 className="mb-9 text-[#B9C1BE]">
                    Our chat app is the perfect way to stay connected with
                    friends and family.
                </h2>
                <div className="mb-9 flex items-center justify-center gap-6">
                    <IconButton icon={<FacebookIcon />} />
                    <IconButton icon={<GoogleIcon />} />
                    <IconButton icon={<AppleIcon />} />
                </div>
                <Divider>OR</Divider>
                <Button>Sign up withn mail</Button>
                <div className="mb-2 mt-auto w-full text-center text-[#B9C1BE]">
                    Existing account?{' '}
                    <Link className="font-semibold text-white" href="#">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}
