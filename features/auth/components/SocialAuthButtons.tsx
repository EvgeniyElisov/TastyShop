import { SocialAuthButton } from "features/auth/components/SocialAuthButton";

export const SocialAuthButtons = () => {
  return (
    <div className="flex gap-2">
      <SocialAuthButton
        provider="github"
        iconSrc="https://github.githubassets.com/favicons/favicon.svg"
        label="GitHub"
      />
    </div>
  );
};
