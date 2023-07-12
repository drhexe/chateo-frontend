import AppleIcon from '$lib/assets/icons/logos/apple.svg';
import FacebookIcon from '$lib/assets/icons/logos/facebook.svg';
import GoogleIcon from '$lib/assets/icons/logos/google.svg';
import { IconButton } from '$lib/components/icon-button.component';
import { WithClassName } from '$lib/types/helpers/component.helper';
import { cn } from '$lib/utils/cn.util';

interface OauthLoginProps extends WithClassName {}

export function OauthLogin({ className }: OauthLoginProps) {
    return (
        <div
            className={cn(
                'mb-9 flex items-center justify-center gap-6',
                className
            )}
        >
            <IconButton title="login with facebook" icon={<FacebookIcon />} />
            <IconButton title="login with facebook" icon={<GoogleIcon />} />
            <IconButton title="login with facebook" icon={<AppleIcon />} />
        </div>
    );
}
