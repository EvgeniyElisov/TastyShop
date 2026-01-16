"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "shared/lib/utils";
import { AuthModal, CartButton, Container, ProfileButton, SearchInput } from ".";

type Props = {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
};

export const Header = ({ className, hasSearch = true, hasCart = true }: Props) => {
 
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

  const openSignInModal = () => {
    setIsOpenSignInModal(true);
  };

  const closeSignInModal = () => {
    setIsOpenSignInModal(false);
  };

  return (
    <header className={cn("border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm", className)}>
      <Container className={"flex items-center justify-between py-5"}>
        <Link href={"/"} className="group">
          <div className="flex items-center gap-4 transition-transform group-hover:scale-105">
            <div className="relative">
              <Image src={"/logo.png"} alt={"Logo"} width={56} height={56} className="rounded-2xl shadow-lg ring-2 ring-primary/20" />
              <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h1 className="text-3xl uppercase font-black tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Tasty Shop
              </h1>
              <p className="text-sm text-gray-500 leading-4 mt-0.5 font-medium">Самая вкусная еда в мире</p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className={"mx-16 flex-1 max-w-2xl"}>
            <SearchInput />
          </div>
        )}
        <div className="flex items-center gap-3">
          <AuthModal open={isOpenSignInModal} onClose={closeSignInModal} />
          <ProfileButton openSignInModal={openSignInModal} />
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
