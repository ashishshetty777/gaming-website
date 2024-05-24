'use client';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '../components/ui/wobble-card';
import Mobile from '../../../public/assets/get_the_best.png';
import Comprehensive from '../../../public/assets/Comprehensive.png';
import DetailedAnalytics from '../../../public/assets/DetailedAnalytics.png';
import SSOSystems from '../../../public/assets/SSO_System.png';

export function WobbleCardDemo() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full">
      <div className="flex lg:flex-row md:flex-col flex-col">
        <WobbleCard containerClassName="lg:mr-4 md:mr-0 mb-4 md:mb-4 lg:mb-0  mr-0 basis-3/5   one">
          <div className="">
            <div className="flex lg:flex-row md:flex-row flex-col">
              <div className="basis-1/2">
                <h2 className="text-left text-balance text-base md:text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Comprehensive <br></br> Gaming Profiles
                </h2>
                <p className="mt-4 text-left  text-base text-white">
                  Enoobs offers comprehensive gaming profiles that combine KYC
                  verifiability, a stats aggregator, and detailed gaming
                  achievements. These profiles provide gamers with a unified and
                  verified identity that showcases their skills and progress
                  across all partnered platforms.
                </p>
              </div>
              <Image
                src={Comprehensive}
                width={350}
                height={1000}
                alt="linear demo image"
                className=" basis-1/2 h-72 w-96 hidden lg:block md:block  filter -bottom-0 object-contain rounded-2xl"
              />
            </div>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName=" basis-2/5 two ">
          <h2 className="max-w-80  text-left text-balance text-base md:text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Dedicated Social Space for Gamers
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
            Enoobs includes a dedicated social space where gamers can host and
            join communities, fostering interaction and engagement. This feature
            supports various social activities, including gaming channels,
            posts, reels, and messaging, creating a vibrant and interactive
            environment for gamers.
          </p>
        </WobbleCard>
      </div>
      <WobbleCard containerClassName="my-4  three">
        <div>
          <div className="flex lg:flex-row md:flex-row flex-col">
            <div className="basis-1/2">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                SSO System <br></br> Designed for Games
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
                Enoobs provides a game-specific Single Sign-On (SSO) system
                integrated with partner platforms, allowing gamers to easily
                onboard and access multiple gaming platforms with a single
                identity. This seamless integration simplifies the login process
                and enhances user convenience.
              </p>
            </div>
            <Image
              src={SSOSystems}
              width={500}
              height={500}
              alt="linear demo image"
              className="basis-1/2 hidden lg:block md:block h-72 w-96 object-contain rounded-2xl"
            />
          </div>
        </div>
      </WobbleCard>
      <div className="flex lg:flex-row md:flex-col flex-col">
        <WobbleCard containerClassName="h-inherit basis-2/5 four">
          <h2 className="max-w-80  text-left text-balance text-base md:text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Cross-Platform Events and Tournaments Management
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
            Enoobs facilitates the discovery and management of cross-platform
            events and tournaments, providing gamers with a centralized hub to
            track their participation and achievements. This feature enhances
            the competitive gaming experience and ensures gamers never miss out
            on important events.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="basis-3/5  lg:ml-4 md:ml-0 mt-4 md:mt-4 lg:mt-0 ml-0 h-full five"
          className=""
        >
          <div className="flex lg:flex-row md:flex-row flex-col">
            <div className="basis-1/2">
              <h2 className="text-left text-balance text-base md:text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Detailed Analytics for Gaming Companies
              </h2>
              <p className="mt-4 text-left  text-base/6 text-white">
                Enoobs provides gaming companies with detailed analytics based
                on the comprehensive data collected on our platform. This
                valuable insight helps companies understand user behavior,
                engagement patterns, and market trends, enabling them to make
                data-driven decisions to enhance their games and target their
                audiences more effectively.
              </p>
            </div>
            <Image
              src={DetailedAnalytics}
              width={350}
              height={1000}
              alt="linear demo image"
              className="basis-1/2  h-72 w-96 hidden lg:block md:block   filter  object-contain rounded-2xl"
            />
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
