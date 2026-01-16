"use client";

import { CircleUser, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "shared/ui";

type Props = {
  openSignInModal: () => void;
  className?: string;
};

export const ProfileButton = ({ openSignInModal, className }: Props) => {
  const { data: session } = useSession();
  
  return (
    <div className={className}>
      {!session ? (
        <Button onClick={openSignInModal} variant={"outline"} className={"flex items-center gap-2 text-base"}>
          <User size={18} />
          Войти
        </Button>
      ) : (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2 text-base">
            <CircleUser size={20} />
            Профиль
          </Button>
        </Link>
      )}
    </div>
  );
};
