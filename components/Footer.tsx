import React, { ReactNode } from "react";
import Image from "next/image";

import WhiteLogo from "@/public/logo-white.png";
import Pin from "@/public/footer/pin.svg";
import Phone from "@/public/footer/phone.svg";
import Mail from "@/public/footer/mail.svg";

import facebookIcon from "@/public/socials/facebook.svg";
import linkedinIcon from "@/public/socials/linkedin.svg";
import pinterestIcon from "@/public/socials/pinterest.svg";
import twitterIcon from "@/public/socials/twitter.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col bg-woa-black-800 lg:h-[417px] lg:flex-row lg:pt-[58px]">
      <Logo />
      <Information />
      <Contacts />
      <Socials />
      <Copyright />
    </footer>
  );
}

function Socials() {
  return (
    <FooterListContainer className="lg:ml-[204px]">
      <h3 className="text-base font-bold">Social Media</h3>
      <ul className="flex flex-row items-center gap-10">
        <li className="text-sm tracking-wide">
          <Image
            src={facebookIcon}
            width={facebookIcon.width}
            height={facebookIcon.height}
            alt="Facebook icon"
          />
        </li>
        <li className="text-sm tracking-wide">
          <Image
            src={twitterIcon}
            width={twitterIcon.width}
            height={twitterIcon.height}
            alt="Twitter icon"
          />
        </li>
        <li className="text-sm tracking-wide">
          <Image
            src={linkedinIcon}
            width={linkedinIcon.width}
            height={linkedinIcon.height}
            alt="LinkedIn icon"
          />
        </li>
        <li className="text-sm tracking-wide">
          <Image
            src={pinterestIcon}
            width={pinterestIcon.width}
            height={pinterestIcon.height}
            alt="Pinterest icon"
          />
        </li>
      </ul>
    </FooterListContainer>
  );
}

function Contacts() {
  return (
    <FooterListContainer className="lg:ml-[157px]">
      <h3 className="text-base font-bold">Contacts</h3>
      <ul className="flex flex-col gap-6">
        <li className="flex  items-center gap-6 text-sm tracking-wide">
          <Image
            src={Pin}
            width={Pin.width}
            height={Pin.height}
            alt="Pin icon"
          />
          <span>
            1234 Sample Street<br></br>Austin Texas 78704
          </span>
        </li>
        <li className="flex  items-center gap-6 text-sm tracking-wide">
          <Image
            src={Phone}
            width={Phone.width}
            height={Phone.height}
            alt="Phone icon"
          />
          <span>512.333.2222</span>
        </li>
        <li className="flex  items-center gap-6 text-sm tracking-wide">
          <Image
            src={Mail}
            width={Mail.width}
            height={Mail.height}
            alt="Mail icon"
          />
          <span>sampleemail@gmail.com</span>
        </li>
      </ul>
    </FooterListContainer>
  );
}

function Information() {
  return (
    <FooterListContainer className="lg:ml-[99px]">
      <h3 className="text-base font-bold">Information</h3>
      <ul className="flex flex-col gap-5">
        <li className="text-sm tracking-wide">
          <Link href="/">Main</Link>
        </li>
        <li className="text-sm tracking-wide">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="text-sm tracking-wide">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="text-sm tracking-wide">
          <Link href="/certifications">Certifications</Link>
        </li>
        <li className="text-sm tracking-wide">
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </FooterListContainer>
  );
}

function Logo() {
  return (
    <div className="mb-[29px] place-self-center pt-[58px] lg:mb-0 lg:ml-[116px] lg:place-self-auto lg:py-0">
      <Image
        src={WhiteLogo}
        alt="White logo"
        width={WhiteLogo.width}
        height={WhiteLogo.height}
      />
    </div>
  );
}

function Copyright() {
  return (
    <>
      <div className="mt-[29px] h-[70px] lg:hidden"></div>
      <div className="absolute bottom-0 left-0 flex h-[70px] w-full items-center justify-center border-t border-t-white/10 ">
        <p className="text-xs text-woa-black-900/50 ">
          © 2021 All Rights Reserved
        </p>
      </div>
    </>
  );
}

function FooterListContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "my-[29px] flex flex-col gap-6 border-t border-white/10 pl-14 pt-[29px] text-white lg:my-0 lg:border-0 lg:py-0 lg:pl-0",
      )}
    >
      {children}
    </div>
  );
}
