'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GooglePlayBtn from '../../../../public/assets/get_it_on.png';
import Ethereum from '../../../../public/assets/Ethereum.png';
import Polygon from '../../../../public/assets/Polygon.png';
import Ripple from '../../../../public/assets/Ripple.png';
import Solana from '../../../../public/assets/Solana.png';
import Stellar from '../../../../public/assets/Stellar.png';
import Avalanche from '../../../../public/assets/Avalanche.png';
import BNB from '../../../../public/assets/bnb.png';
import Beam from '../../../../public/assets/beam.png';
import Gala from '../../../../public/assets/gala.png';
import Immutable from '../../../../public/assets/imuut.png';
import Oasys from '../../../../public/assets/Oasys.png';
import Wax from '../../../../public/assets/wax.png';
import Arbitrum from '../../../../public/assets/Arbitrum.png';
import Ronin from '../../../../public/assets/ronin.png';
import Mobile from '../../../../public/assets/get_the_best.png';
import Phone from '../../../../public/assets/phone.gif';
import Team1 from '../../../../public/assets/anish-min.jpg';
import Team2 from '../../../../public/assets/ved-min.jpg';
import Team3 from '../../../../public/assets/Gagan-min.jpg';
import Team4 from '../../../../public/assets/Vishwa-min.jpg';
import Fb from '../../../../public/assets/fb-white.png';
import Instagram from '../../../../public/assets/instagram-white.png';
import Twitter from '../../../../public/assets/twitter-white.png';
import FirstFlag from '../../../../public/assets/2023.png';
import SecondFlag from '../../../../public/assets/2024.png';
import ThirdFlag from '../../../../public/assets/2025.png';
import FourthFlag from '../../../../public/assets/2026.png';
import Ellipse1 from '../../../../public/assets/Ellipse1.png';
import Ellipse2 from '../../../../public/assets/Ellipse2.png';
import Ellipse3 from '../../../../public/assets/Ellipse3.png';
import Ellipse4 from '../../../../public/assets/Ellipse4.png';
import Ellipse5 from '../../../../public/assets/Ellipse5.png';
import Ellipse6 from '../../../../public/assets/Ellipse6.png';
import Circle from '../../../../public/assets/Circle.png';
import Faq from '../faqs/faqs';
import FaqImage from '../../../../public/assets/faq.jpg';
import { WobbleCardDemo } from '../wobble';
import { ArrowRight } from 'lucide-react';
const Content = () => {
  let games1 = [
    'League of Legends',
    'Counter-Strike: Global Offensive',
    "PlayerUnknown's Battlegrounds",
    'Rainbow Six Siege',
    'Blockchain Monster Hunt',
    'League of Kingdoms',
    'GensoKishi Online',
    'Alpha League Racing',
    'Mini Royale: Nations',
    'Star Atlas: SAGE Labs',
    'Mighty Action Heroes',
    'My Crypto Heroes',
    'Battle Bears Heroes',
    'Goons of Balatroon',
    'Galaxy Fight Club',
    'Tales of Elleria',
    'Echoes of Empire',
    'Crypto Unicorns',
    'Sunflower Land',
    'Battle Showdown',
    'Benji Bananas',
    'DeFi Kingdoms',
    'Portal Fantasy',
    'Petopia',
    'TaleCraft',
    'Champions Arena',
    'Eternal Paradox',
    'Call of Duty',
    'Valorant',
    'Rocket League',
    'Philand',
    'REVV Racing',
    'Buddy Arena',
    'Dogami',
    'Second World',
  ];

  let games2 = [
    'Pegaxy',
    'Dota 2',
    'Fortnite',
    'Overwatch',
    'CyBall',
    'Arc8',
    'Skyweaver',
    'REALM',
    'Voxie Tactics',
    'Mojo Melee',
    'Torque Drift 2',
    'Gas Hero',
    'Crypto Raiders',
    'Decentraland',
    'Arsenal',
    'Oath of Peak',
    'Cyber Stadium',
    'Defy',
    'DragonMaster',
    'Forest Knight',
    'Bullieverse',
    'STG Football',
    'Zed Run',
    'The Heist',
    'EV.IO',
    'Aurory',
    'DeFi Land',
    'Neopolis',
    'Bladerite',
    'Everseed',
    'Pixel Guild',
    'Genopets',
    'Zeeverse',
    'Bridgeworld',
    'Crabada',
    'Dragon Strike',
    'Spider Tanks',
    'Meow Match',
    'Town Star',
    'Loot by Rogue',
    'Pixels',
    'Axie Infinity',
    'Apeiron',
    'Alien Worlds',
    'Splinterlands',
  ];

  let blockChain = [
    {
      name: 'Ethereum',
      image: Ethereum,
    },
    {
      name: 'Polygon',
      image: Polygon,
    },
    {
      name: 'Avalanche',
      image: Avalanche,
    },
    {
      name: 'Ripple',
      image: Ripple,
    },
    {
      name: 'Stellar',
      image: Stellar,
    },
    {
      name: 'Solana',
      image: Solana,
    },
    {
      name: 'BNB',
      image: BNB,
    },
    {
      name: 'Immutable X',
      image: Immutable,
    },
    {
      name: 'Arbitrum',
      image: Arbitrum,
    },
    {
      name: 'Gala Games',
      image: Gala,
    },
    {
      name: 'WAX',
      image: Wax,
    },
    {
      name: 'BEAM',
      image: Beam,
    },
    {
      name: 'Oasys',
      image: Oasys,
    },
    {
      name: 'Ronin',
      image: Ronin,
    },
    {
      name: 'Ethereum',
      image: Ethereum,
    },
    {
      name: 'Polygon',
      image: Polygon,
    },
    {
      name: 'Avalanche',
      image: Avalanche,
    },
    {
      name: 'Ripple',
      image: Ripple,
    },
    {
      name: 'Stellar',
      image: Stellar,
    },
    {
      name: 'Solana',
      image: Solana,
    },
    {
      name: 'BNB',
      image: BNB,
    },
    {
      name: 'Immutable X',
      image: Immutable,
    },
    {
      name: 'Arbitrum',
      image: Arbitrum,
    },
    {
      name: 'Gala Games',
      image: Gala,
    },
    {
      name: 'WAX',
      image: Wax,
    },
    {
      name: 'BEAM',
      image: Beam,
    },
    {
      name: 'Oasys',
      image: Oasys,
    },
    {
      name: 'Ronin',
      image: Ronin,
    },
  ];

  return (
    <>
      <div className="bg-black lg:bg-unset md:bg-unset relative">
        <video
          className="bg-vid hidden lg:block md:block w-full object-center z-minus"
          poster={'assets/Hero.png'}
          autoPlay
          loop
          muted
          // controls
        >
          <source
            src={'/assets/Enoobs_web_bg_vedio_conpressed.mp4'}
            type="video/mp4"
          />
        </video>
        <section className="md:absolute lg:absolute relative left-0 right-0 lg:top-24 md:top-24 md:px-20 lg:px-20 px-10 py-10">
          <div className="py-5 md:px-0 lg:px-0 px-1 text-white text-left">
            <div className="lg:text-7.5xl md:text-6xl text-4xl lg:leading-78 md:leading-60  tracking-normal font-bold">
              Create <br></br>
              Your <span className="text-main-green">Universal</span>
              <br></br>
              Gaming ID
            </div>
          </div>
          <div className=" text-white font-poppinsLight relative font-extralight">
            <div className="testimonial-slider">
              <ul className="md:w-2/4 lg:w-2/4 m-auto  w-full slider">
                <li>
                  <div className="testimonial-slider-content">
                    <p className=" font-poppinsLight text-lg text-left">
                      You deserve recognition and rewards for the time,
                      attention and accomplishments you put into gaming across a
                      variety of games.
                    </p>
                  </div>
                </li>
                <li>
                  <p className=" font-poppinsLight text-lg text-left">
                    We believe that your gaming history and achievements are
                    incredibly valuable.
                  </p>
                </li>
                <li>
                  <div className="testimonial-slider-content">
                    <p className="font-poppinsLight text-lg text-left">
                      Single profile that brings together every aspect of your
                      gaming life and truly recognizes who you are as a gamer.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="testimonial-slider-content">
                    <p className=" font-poppinsLight text-lg text-left">
                      We believe that your gaming history and achievements are
                      incredibly valuable.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="flex mt-2">
              <Image
                className="h-12 w-36 cursor-pointer"
                src={GooglePlayBtn}
                alt="Google-play"
              />
              <div className="text-main-green font-bold text-xl cursor-pointer p-2 ml-5 mt-0 flex">
                Join us now
                <ArrowRight className="ml-2 mt-1" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="md:px-20 lg:px-0 px-10 py-10 bg-white">
        <div className="pt-10 text-center text-4xl">
          <div className="font-poppins text-black">
            Get the best of your blockchains
          </div>
          <div className="py-3 text-base font-poppinsLight text-balance text-main-gray">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </div>
        </div>
        <div className="w-full pt-5 px-0 lg:px-32 md:px-10">
          <div className="w-full slider overflow-hidden">
            <div className="flex slider-track m-auto justify-center justify-items-center">
              {blockChain.map((single, i) => {
                return (
                  <div key={i} className="slide">
                    <div className="mt-2 lg:mt-0 md:mt-0  flex rounded-full mr-3 w-44 h-10 text-center py-1.5 px-2 justify-center bg-pill-bg-green border border-pill-border">
                      <Image
                        alt={single.name}
                        className="mt-1 h-4 w-4"
                        src={single.image}
                      />
                      <div className=" text-center ml-1 text-base font-poppinsLight font-semibold text-black">
                        {single.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="pt-10 text-left lg:text-center md:text-center text-4xl font-poppins text-black">
          Why Enoobs?
        </div> */}
        <div className="block  lg:hidden md:hidden relative">
          <div className="ml-0 mr-0 flex flex-col">
            <div className="mt-10">
              <div className="text-xl text-black font-bold">
                Universal Gaming ID
              </div>
              <div className="text-base font-poppinsLight text-black">
                Enoobs offers a blockchain-based decentralized identifier (DID)
                for gamers, secured through a straightforward KYC verification
                process. This universal gaming ID provides a global identity to
                gamers & streamlines processes like age verification for games
                with restrictions without the need for gamers to resubmit their
                documents across various platforms.
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-bold text-black">
                Dedicated Social Gaming Space
              </div>
              <div className="text-base font-poppinsLight text-black">
                Enoobs offers a dedicated social media space for gamers to
                connect, share, and build communities using their universal
                gaming IDs. This allows users to join and host gaming
                communities, post updates, showcase skills, and communicate with
                fellow gamers.
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-bold text-black">
                Stats Aggregator
              </div>
              <div className="text-base font-poppinsLight text-black">
                {` Our stats aggregator compiles gaming statistics and achievements
                from our partner platforms, consolidating them into a single,
                comprehensive profile linked to the gamer's universal ID. This
                feature enables gamers to showcase their skills, track their
                progress, and gain and monetize their recognition.`}
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-bold text-black">
                Tournaments/Events Management
              </div>
              <div className="text-base font-poppinsLight text-black">
                Gamers can use Enoobs to gather all information about upcoming
                tournaments and events and the ones they participate in. They
                can consolidate their progress on their universal ID. This helps
                them keep track of their competitive engagements and
                achievements and brings opportunities for further participation,
                recognition, and monetization.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 hidden lg:block md:block relative">
          {/* <Image className="w-3/5 h-3/5 m-auto" src={Circle} alt="circle-bg" /> */}
          <div className="ml-0 mr-0 gap-0 grid grid-cols-midsection">
            <div className="relative mt-28 md:px-1 lg:px-8">
              <div className="flex flex-col">
                <div className="relative">
                  <div className="flex flex-col">
                    <Image
                      className="w-28 h-28 m-auto"
                      src={Ellipse3}
                      alt="Ellipse3"
                    />
                    <div className="min-h-52">
                      <div className="flex">
                        <Image
                          className="w-20 h-20 m-auto"
                          src={Ellipse1}
                          alt="Ellipse1"
                        />
                        <div>
                          <div className="text-xl text-left font-bold text-black">
                            Dedicated Social Gaming Space
                          </div>
                          <div className="text-base mt-2 font-poppinsLight text-black">
                            Enoobs offers a dedicated social media space for
                            gamers to connect, share, and build communities
                            using their universal gaming IDs. This allows users
                            to join and host gaming communities, post updates,
                            showcase skills, and communicate with fellow gamers.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-52">
                  <div className="pt-10 flex flex-col relative">
                    <div className="pl-20">
                      <div className="text-xl font-bold text-black">
                        Universal Gaming ID
                      </div>
                      <div className="text-base mt-2 font-poppinsLight text-black">
                        Enoobs offers a blockchain-based decentralized
                        identifier (DID) for gamers, secured through a
                        straightforward KYC verification process. This universal
                        gaming ID provides a global identity to gamers &
                        streamlines processes like age verification for games
                        with restrictions without the need for gamers to
                        resubmit their documents across various platforms.
                      </div>
                    </div>
                    <div className="w-full">
                      <Image
                        className="w-30 h-30 ml-20"
                        src={Ellipse2}
                        alt="Ellipse2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pt-10 mt-20 text-left lg:text-center md:text-center text-4xl font-poppins text-black">
                Why Enoobs?
              </div>
              <Image
                className="h-500 w-64 m-auto mt-16 rounded-3xl border-8 border-black"
                src={Phone}
                alt="mobile"
              />
            </div>
            <div className="relative mt-28 md:px-1 lg:px-8">
              <div className="flex flex-col">
                <div className="relative">
                  <div className="flex flex-col">
                    <Image
                      className="w-28 h-28 m-auto"
                      src={Ellipse4}
                      alt="Ellipse4"
                    />
                    <div className="min-h-52">
                      <div className="flex relative">
                        <div className="">
                          <div className="text-xl text-left font-bold text-black">
                            Tournaments/Events Management
                          </div>
                          <div className="text-base mt-2 font-poppinsLight text-black">
                            Gamers can use Enoobs to gather all information
                            about upcoming tournaments and events and the ones
                            they participate in. They can consolidate their
                            progress on their universal ID. This helps them keep
                            track of their competitive engagements and
                            achievements and brings opportunities for further
                            participation, recognition, and monetization.
                          </div>
                        </div>
                        <Image
                          className="w-20 h-20  absolute -bottom-20 right-0"
                          src={Ellipse5}
                          alt="Ellipse5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-52">
                  <div className="pt-10 flex flex-col relative">
                    <div className="pr-20">
                      <div className="text-xl font-bold text-black">
                        Stats Aggregator
                      </div>
                      <div className="text-base mt-2 font-poppinsLight text-black">
                        {` Our stats aggregator compiles gaming statistics and
                        achievements from our partner platforms, consolidating
                        them into a single, comprehensive profile linked to the
                        gamer's universal ID. This feature enables gamers to
                        showcase their skills, track their progress, and gain
                        and monetize their recognition.`}
                      </div>
                    </div>
                    <div className="w-full">
                      <Image
                        className="w-24 h-24 mr-10 float-right"
                        src={Ellipse6}
                        alt="Ellipse6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-blue md:px-20 lg:px-20 px-10 py-10">
        <div className="pt-10 text-center text-white text-4xl">
          <div className="font-poppins"> Supported Web3-Games</div>
        </div>
        <div className=" w-full pt-5 slider overflow-hidden">
          <div className="flex h-12 m-auto slider-track justify-center">
            {games1.map((game, i) => {
              return (
                <div key={i} className="slide w-48">
                  <div
                    className={`flex rounded-full mr-3 w-44 text-center py-1 px-2 justify-center text-white`}
                  >
                    <div className="ml-1 text-base font-poppinsLight font-extralight">
                      {game}
                    </div>
                  </div>
                  <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
                </div>
              );
            })}
          </div>
          <div className="flex m-auto slider-track justify-center">
            {games2.map((game, i) => {
              return (
                <div key={i} className="slide2">
                  <div
                    className={`flex rounded-full mr-3 w-36  text-center py-1 px-2 justify-center text-white`}
                  >
                    <div className="ml-1 text-base font-poppinsLight font-extralight">
                      {game}
                    </div>
                  </div>
                  <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex border-t border-slate-700 mt-8 pt-20 text-white">
          <div className="basis-1/2 text-4xl font-bold">
            Lorem Ipsum is simply <br></br> dummy text of the
          </div>
          <div className="basis-1/2 text-base font-poppinsLight font-extralight mt-4 h-8 border-l-2 pl-4 border-main-green">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="mt-20">
          <WobbleCardDemo />
        </div>
        {/* <div className=" grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20 justify-center">
          <div className="p-4 bg-white mt-2 mb-2 md:mt-0 lg:mt-0 rounded-md text-center mr-0 md:mr-4 lg:mr-4 shadow-card">
            <div className="text-3xl mt-2 font-bold text-black">
              Personalized Gaming Profile
            </div>
            <div className="flex md:flex-col lg:flex-row flex-col mt-4">
              <div className="text-base m-auto text-left font-poppinsLight text-black basis-2/5">
                Imagine a single profile that encapsulates every facet of your
                gaming journey, allowing you to authentically rediscover and
                celebrate your gaming identity. At our core, we firmly believe
                in empowering you with complete ownership of your gaming
                profile. Furthermore, we advocate for acknowledging and
                rewarding your dedication, skill, and achievements across
                diverse gaming titles.
              </div>
              <Image
                className="w-56 h-500 m-auto basis-2/4"
                src={Mobile}
                alt="phone"
              />
            </div>
          </div>
          <div className="p-4 bg-white mt-2 mb-2 md:mt-0 lg:mt-0 rounded-md text-center mr-0 md:mr-4 lg:mr-4 shadow-card">
            <div className="text-3xl mt-2 font-bold text-black">
              Personalized Gaming Profile
            </div>
            <div className="flex md:flex-col-reverse lg:flex-row flex-col-reverse mt-4">
              <div className="text-base m-auto text-left font-poppinsLight text-black basis-2/5">
                Imagine a single profile that encapsulates every facet of your
                gaming journey, allowing you to authentically rediscover and
                celebrate your gaming identity. At our core, we firmly believe
                in empowering you with complete ownership of your gaming
                profile. Furthermore, we advocate for acknowledging and
                rewarding your dedication, skill, and achievements across
                diverse gaming titles.
              </div>
              <Image
                className="w-56 h-500 m-auto basis-2/4"
                src={Mobile}
                alt="phone"
              />
            </div>
          </div>
        </div> */}
      </section>
      <section id="about-us" className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="pt-10 mt-0 text-center text-4xl">
          <div className="font-poppins text-black"> About Us</div>
          <div className="md:px-32 text-balance lg:px-32 px-5 pt-5 text-base font-poppinsLight text-main-gray">
            Welcome to Enoobs, your comprehensive gaming profile solution. At
            Enoobs, we combine KYC verifiability, a robust stats aggregator, and
            detailed gaming achievements to create unified and verified
            identities for gamers. Our platform showcases your skills and
            progress across all partnered platforms, providing a seamless and
            integrated gaming experience. Our game-specific Single Sign-On (SSO)
            system is designed to streamline your gaming journey. By integrating
            with our partner platforms, we allow you to effortlessly onboard and
            access multiple gaming platforms with a single identity. This
            seamless integration simplifies the login process and enhances user
            convenience.
          </div>
          <div className="md:px-32 text-balance lg:px-32 px-5 pt-5 text-base font-poppinsLight text-main-gray">
            For those passionate about competitive gaming, Enoobs provides a
            centralized hub for discovering and managing cross-platform events
            and tournaments. Track your participation and achievements with
            ease, ensuring you never miss out on important events and enhancing
            your competitive gaming experience. Moreover, Enoobs delivers
            valuable analytics to gaming companies, drawing insights from the
            comprehensive data collected on our platform. These detailed
            analytics help companies understand user behavior, engagement
            patterns, and market trends, enabling them to make informed,
            data-driven decisions to enhance their games and better target their
            audiences. Join us at Enoobs and elevate your gaming experience with
            a unified identity, seamless integration, vibrant social
            interactions, and comprehensive event management.
          </div>
        </div>
      </section>
      {/* <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="pt-10 mt-0 text-center text-4xl">
          <div className="font-poppins text-black"> Roadmap</div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 mt-10 justify-center">
            <div className="basis-1/2">
              <div className="flex">
                <Image className="h-20 w-16" src={FirstFlag} alt="first" />
                <div className="w-full hidden md:block lg:block h-px border-t-2 border-main-green mt-14 "></div>
              </div>
              <div className="text-base  text-left mr-4">
                <div className="font-black bg-text-bg text-black mt-2 w-fit p-1">
                  2023
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 lg:mt-0">
              <div className="flex ">
                <Image className="h-20 w-16" src={SecondFlag} alt="first" />
                <div className="w-full hidden md:block lg:block h-px border-t-2 border-dashed border-main-green mt-14 "></div>
              </div>
              <div className="text-base text-left mr-4">
                <div className="font-black bg-text-bg text-black mt-2 w-fit p-1">
                  2024
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 lg:mt-0">
              <div className="flex">
                <Image className="h-20 w-16" src={ThirdFlag} alt="first" />
                <div className="w-full hidden md:block lg:block h-px border-t-2 border-dashed border-slate-200 mt-14 "></div>
              </div>
              <div className="text-base text-left mr-4">
                <div className="font-black bg-text-bg text-black mt-2 w-fit p-1">
                  2025
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 lg:mt-0">
              <div className="flex">
                <Image className="h-20 w-16" src={FourthFlag} alt="first" />
              </div>
              <div className="text-base text-left mr-4">
                <div className="font-black bg-text-bg text-black mt-2 w-fit p-1">
                  2026
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 font-poppinsLight text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div id="team" className="text-center text-4xl">
          <div className="font-poppins text-black">Meet the team</div>
          <div className="pt-5 text-base font-poppinsLight text-main-gray">
            It is a long established fact that a reader will be distracted{' '}
            <br></br> by the readable content of a page.
          </div>
        </div>
        <div className=" w-full flex-row mt-10 grid lg:grid-cols-4 md:grid-cols-2 justify-center">
          <div className="w-fit mx-auto">
            <Image className="w-72 h-230" src={Team1} alt="team-1" />
            <div className="w-72 h-230 bg-dark-blue p-4">
              <div className="text-4xl font-bold text-white">
                Anish <br></br> Kapoor
              </div>
              <div className="text-md my-2 font-light text-white">
                Chief Executive Officer
              </div>
              <div className="text-md my-2 font-light text-white">
                Product Owner NexBloc, Securvaults, Iotric
              </div>
              <div className="flex mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div>
            </div>
          </div>
          <div className="w-fit mt-10 md:mt-0 lg:mt-0 mx-auto">
            <Image className="w-72 h-230" src={Team2} alt="team-1" />
            <div className="w-72 h-230 bg-dark-blue p-4">
              <div className="text-4xl font-bold text-white">
                Ved <br></br> Prakash
              </div>
              <div className="text-md my-2 font-light text-white">
                Chief Technology Officer
              </div>
              <div className="text-md my-2 font-light text-white">
                Serial Entrepenuer Iotric, NexBloc, MyIDFI
              </div>
              <div className="flex  mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div>
            </div>
          </div>
          <div className="w-fit mt-10 md:mt-10 lg:mt-0 mx-auto">
            <Image className="w-72 h-230" src={Team3} alt="team-1" />
            <div className="w-72 h-230 bg-dark-blue p-4">
              <div className="text-4xl font-bold text-white">
                Gagandeep Singh
              </div>
              <div className="text-md my-2 font-light text-white">
                Technical Lead
              </div>
              <div className="text-md my-2 font-light text-white">
                Team Lead Izzyhomes, ThirdEye, FriendsChat
              </div>
              <div className="flex mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div>
            </div>
          </div>
          <div className="w-fit mt-10 md:mt-10 lg:mt-0 mx-auto">
            <Image className="w-72 h-230" src={Team4} alt="team-1" />
            <div className="w-72 h-230 bg-dark-blue p-4">
              <div className="text-4xl font-bold text-white">
                Vishvanath Reddy
              </div>
              <div className="text-md my-2 font-light text-white">
                Solutions architect
              </div>
              <div className="text-md my-2 font-light text-white">
                Technical Architect Croplife, Hindxr, Kardiogenics
              </div>
              <div className="flex mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <a href="#">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team1}
                  alt="Bonnie Avatar"
                ></Image>
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Anish Kapoor</a>
                </h3>
                <span className="text-gray-500">Chief executive Officer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Bonnie drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <a href="#">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team2}
                  alt="Jese Avatar"
                ></Image>
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Ved Prakash</a>
                </h3>
                <span className="text-gray-500">Chief Technology Officer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Jese drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <a href="#">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team3}
                  alt="Michael Avatar"
                ></Image>
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Gagandeep Singh</a>
                </h3>
                <span className="text-gray-500">Technical Lead</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Michael drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <a href="#">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team4}
                  alt="Sofia Avatar"
                ></Image>
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Vishwanath Reddy</a>
                </h3>
                <span className="text-gray-500">Solutions Architect</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Lana drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div className="m-auto">
            <div className="text-5xl font-bold text-black text-center lg:text-left md:text-center">
              Frequently asked questions
            </div>
            <div className="mt-6 font-medium text-main-gray text-center lg:text-left md:text-center mb-10 md:mb-10 lg:mb-0">
              Explore common queries about Enoobs and its benefits
            </div>
            <Image
              src={FaqImage}
              className="h-400 w-300 md:w-400 lg:w-400 mt-2"
              alt="faq"
            />
          </div>
          <Faq />
        </div>
      </section>
      <section
        id="contact-us"
        className="bg-white md:px-20 lg:px-20 px-10 py-10"
      >
        <div className="flex text-left lg:flex-row md:flex-row flex-col ">
          <div className="text-7xl font-bold">
            <span className="text-black"> Say </span>
            <span className="text-main-green"> hello. </span>
          </div>
          <div className="md:ml-4 lg:ml-4 sm:ml-0 mt-8 md:mt-1 lg:mt-1 text-base font-poppinsLight font-medium text-main-gray">
            Feel free to drop us an email anytime.<br></br> We’d love to hear
            from you.
          </div>
        </div>
        <div className="lg:mt-12 md:mt-12 mt-0 flex flex-col ">
          <form>
            <div className="flex flex-col md:flex-row lg:flex-row">
              <div className="relative mt-10 basis-2/6">
                <div className="flex flex-col pr-5">
                  <div className="basis-1/2">
                    <label htmlFor="name" className=" text-gray-800">
                      What should we call you?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full mt-2 border-2 border-transparent shadow-input py-3 pl-3 rounded placeholder:text-gray-500 text-gray-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="basis-1/2 mt-7">
                    <label htmlFor="phone" className=" text-main-gray">
                      What is your mobile number?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="block w-full mt-2 border-2 border-transparent shadow-input py-3 pl-3 rounded placeholder:text-gray-500 text-gray-500 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="relative mt-10 basis-2/6">
                <div className="flex flex-col pr-5">
                  <div className="basis-1/2">
                    <label htmlFor="email" className=" text-main-gray">
                      What is your email id?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full mt-2 border-2 border-transparent shadow-input py-3 pl-3 rounded placeholder:text-gray-500 text-gray-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="basis-1/2 mt-7">
                    <label htmlFor="subject" className=" text-main-gray">
                      Subject
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full border-2 border-transparent shadow-input mt-2 py-3 pl-3 rounded placeholder:text-gray-500 text-gray-500 sm:text-sm sm:leading-6"
                      placeholder="Your subject"
                    />
                  </div>
                </div>
              </div>
              <div className="basis-2/6">
                <div className="mt-10">
                  <label htmlFor="message" className=" text-main-gray">
                    Message
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="block h-40 mt-2 w-full border-2 border-transparent shadow-input py-3 pl-3 rounded placeholder:text-gray-500 text-gray-500 sm:text-sm sm:leading-6"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className="w-full">
            <button className="mt-10 mr-5 float-right text-white cursor-pointer text-base font-poppinsLight py-2.5 px-5 rounded-full bg-main-green">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
