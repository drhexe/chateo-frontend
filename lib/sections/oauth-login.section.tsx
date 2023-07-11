import AppleIcon from '$lib/assets/icons/logos/apple.svg';
import FacebookIcon from '$lib/assets/icons/logos/facebook.svg';
import GoogleIcon from '$lib/assets/icons/logos/google.svg';
import { IconButton } from '$lib/components/icon-button.component';

export function OauthLogin() {
    return (
        <div className="mb-9 flex items-center justify-center gap-6">
            <IconButton icon={<FacebookIcon />} />
            <IconButton icon={<GoogleIcon />} />
            <IconButton icon={<AppleIcon />} />
        </div>
    );
}
