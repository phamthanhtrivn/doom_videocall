"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="pt-5 pl-5 text-white border-none bg-dark-1">
          <DialogTitle className="sr-only" >Mobile navigation menu</DialogTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Xoom logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Doom</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
