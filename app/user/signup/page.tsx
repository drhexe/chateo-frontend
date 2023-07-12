'use client';

import BackIcon from '$lib/assets/icons/ui/back.svg';
import { Button } from '$lib/components/button.component';
import { Divider } from '$lib/components/divider.component';
import { TextInput } from '$lib/components/text-input.component';
import { OauthLogin } from '$lib/sections/oauth-login.section';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    return (
        <div className="relative flex h-full flex-col overflow-auto bg-[#121414] p-6 [&>*]:flex-shrink-0">
            <Button variant="ghost" className="w-fit" onClick={router.back}>
                <BackIcon className="pointer-events-none" />
            </Button>
            <h1 className="relative z-10 mx-auto mb-5 mt-14 text-lg font-semibold leading-[18px]">
                Sign up with{' '}
                <span className="relative after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-[#58C3B6]">
                    Email
                </span>
            </h1>
            <p className="mx-auto mb-14 max-w-[340px] text-center font-medium text-[#797C7B]">
                Get chatting with friends and family today by signing up for our
                chat app!
            </p>
            <TextInput
                label={{
                    children: 'Your name',
                }}
                container={{
                    className: 'mb-8',
                }}
            />
            <TextInput
                label={{
                    children: 'Your email',
                }}
                container={{
                    className: 'mb-8',
                }}
            />
            <TextInput
                label={{
                    children: 'Password',
                }}
                container={{
                    className: 'mb-10',
                }}
            />
            <TextInput
                label={{
                    children: 'Confirm Password',
                }}
                container={{
                    className: 'mb-10',
                }}
            />
            <Button variant="secondary" className="mb-4 mt-auto">
                Create an account
            </Button>
        </div>
    );
}
