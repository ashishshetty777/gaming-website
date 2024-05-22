'use client';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '../components/ui/wobble-card';
import Mobile from '../../../public/assets/get_the_best.png';

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-main-green min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Comprehensive Gaming Profiles
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Enoobs offers comprehensive gaming profiles that combine KYC
            verifiability, a stats aggregator, and detailed gaming achievements.
            These profiles provide gamers with a unified and verified identity
            that showcases their skills and progress across all partnered
            platforms.
          </p>
        </div>
        {/* <Image
          src={Mobile}
          width={350}
          height={1000}
          alt="linear demo image"
          style={{ height: '350px', width: '1000px' }}
          className="absolute  h-96 w-96 hidden lg:block md:block -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Dedicated Social Space for Gamers
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Enoobs includes a dedicated social space where gamers can host and
          join communities, fostering interaction and engagement. This feature
          supports various social activities, including gaming channels, posts,
          reels, and messaging, creating a vibrant and interactive environment
          for gamers.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            SSO System Designed for Games
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Enoobs provides a game-specific Single Sign-On (SSO) system
            integrated with partner platforms, allowing gamers to easily onboard
            and access multiple gaming platforms with a single identity. This
            seamless integration simplifies the login process and enhances user
            convenience.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Cross-Platform Events and Tournaments Management
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Enoobs facilitates the discovery and management of cross-platform
          events and tournaments, providing gamers with a centralized hub to
          track their participation and achievements. This feature enhances the
          competitive gaming experience and ensures gamers never miss out on
          important events.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Detailed Analytics for Gaming Companies
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Enoobs provides gaming companies with detailed analytics based on
            the comprehensive data collected on our platform. This valuable
            insight helps companies understand user behavior, engagement
            patterns, and market trends, enabling them to make data-driven
            decisions to enhance their games and target their audiences more
            effectively.
          </p>
        </div>
        {/* <Image
          src={Mobile}
          width={350}
          height={1000}
          alt="linear demo image"
          style={{ height: '500px', width: '1200px' }}
          className="absolute  h-96 w-96 hidden lg:block md:block -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
    </div>
  );
}
