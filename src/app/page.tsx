"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import EquilibriumImage from "public/images/image-equilibrium.jpg";
import AvatarImage from "public/images/image-avatar.png";
import EthIcon from "public/images/icon-ethereum.svg";
import ClockIcon from "public/images/icon-clock.svg";
import ViewIcon from "public/images/icon-view.svg";

export default function Home() {
  const [isOverlayActive, setIsOverlayActive] = React.useState(false);

  function activateOverlay() {
    setIsOverlayActive(true);
  }

  function deactivateOverlay() {
    setIsOverlayActive(false);
  }

  return (
    <main className="min-h-screen mx-auto max-w-[1440px] py-[3.875rem] px-6">
      <div className="w-full bg-dark-blue-2 text-white h-full rounded-[0.938rem] p-6">
        <Link
          href="/"
          className="relative outline-none focus:outline-none"
          onMouseOver={activateOverlay}
          onMouseOut={deactivateOverlay}
          onFocus={activateOverlay}
          onBlur={deactivateOverlay}
        >
          <Image
            src={EquilibriumImage}
            alt="Equilibrium"
            className="rounded-lg mb-6"
          />
          {isOverlayActive && (
            <div className="rounded-lg bg-cyan bg-opacity-50 z-20 absolute h-full w-full top-0 flex items-center justify-center">
              <Image src={ViewIcon} alt="View" />
            </div>
          )}
        </Link>

        <h1 className="text-[1.375rem] font-semibold">
          <Link href="/" className="hover:text-cyan focus:text-cyan">
            Equilibrium #3429
          </Link>
        </h1>
        <p className="text-base text-soft-blue mt-[0.75rem]">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="my-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={EthIcon} alt="Ethereum" />
            <span className="text-[0.938rem] ml-2 text-cyan">0.041 ETH</span>
          </div>
          <div className="flex items-center">
            <Image src={ClockIcon} alt="Clock" />
            <span className="text-[0.938rem] ml-2 text-soft-blue">
              3 days left
            </span>
          </div>
        </div>

        <hr className="border-dark-blue-1" />

        <div className="mt-4 flex items-center">
          <Image
            src={AvatarImage}
            alt="Avatar"
            width={33}
            height={33}
            className="border border-white rounded-full"
          />
          <p className="ml-4 text-soft-blue text-[0.938rem]">
            Creation of{" "}
            <Link
              href="/"
              className="text-white hover:text-cyan focus:text-cyan focus-within:text-cyan"
            >
              Jules Wyvern
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
