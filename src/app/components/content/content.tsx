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
import { useToast } from '@/components/ui/use-toast';
import Mobile from '../../../../public/assets/get_the_best.png';
import Phone from '../../../../public/assets/phone.gif';
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
import Link from 'next/link';
const Content = () => {
  const [formData, setFormData] = useState<any>({
    name: '',
    phone: '',
    email: '',
    message: '',
    subject: '',
  });

  const [onLoading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  useEffect(() => {}, []);

  const changeHandler = (value: string, key: string) => {
    let newData = { ...formData };
    newData[key] = value;
    setFormData(newData);
    setLoading(false);
  };

  const onFormSubmit = (event: any) => {
    setLoading(true);
    const apiUrl =
      'https://api.hsforms.com/submissions/v3/integration/submit/46376393/562aa2f1-f49a-49da-af59-81c838a33457';
    event.preventDefault();
    if (
      !formData.name ||
      !formData.subject ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        variant: 'destructive',
        description: 'Please fill all the required fields',
      });
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          {
            value: formData.name,
            objectTypeId: '0-1',
            name: 'firstname',
          },
          {
            value: formData.email,
            objectTypeId: '0-1',
            name: 'email',
          },
          {
            value: formData.phone,
            objectTypeId: '0-1',
            name: 'phone',
          },
          {
            value: formData.subject,
            objectTypeId: '0-1',
            name: 'subject',
          },
          {
            value: formData.message,
            objectTypeId: '0-1',
            name: 'message',
          },
        ],
      }),
    };

    fetch(apiUrl, requestOptions)
      .then(response => {
        return response.json();
      })
      .then((result: any) => {
        if (!result.statusCode) {
          toast({
            description:
              'Your response has been sent. We will contact you shortly!',
          });
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
            subject: '',
          });
          setLoading(false);

          return;
        }

        if (result.statusCode === 400) {
          toast({
            variant: 'destructive',
            description: result.message[0],
          });
          return;
        }

        if (result.statusCode > 400) {
          throw new Error();
        }
      })
      .catch(error => {
        toast({
          variant: 'destructive',
          description: `Oops... Something went wrong.f`,
        });
        setLoading(false);
      });
  };

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
        <div className="w-full h-full"></div>
        <video
          className="bg-vid blur-sm hidden lg:block md:block w-full object-center z-minus"
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
              <Link
                href="https://play.google.com/store/apps/details?id=com.enoobs.app"
                target="_blank"
              >
                <Image
                  className="h-12 w-36 cursor-pointer"
                  src={GooglePlayBtn}
                  alt="Google-play"
                />
              </Link>
              <Link href={'https://beta-app.enoobs.com/'} target="_blank">
                <div className="text-main-green font-bold text-xl cursor-pointer p-2 ml-5 mt-0 flex">
                  Join us now
                  <ArrowRight className="ml-2 mt-1" />
                </div>
              </Link>
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
            We support all the popular Blockchain based games
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
          <div className="font-poppins"> The Games You Love</div>
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
            Why Enoobs Ecosystem Is Needed
          </div>
          <div className="basis-1/2 text-base font-poppinsLight font-extralight mt-4 border-l-2 pl-4 border-main-green">
            As the gaming landscape keeps changing, the idea of a gaming social
            platform with a universal gaming ID and creator economy represents
            innovation.
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
          <form onSubmit={onFormSubmit}>
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
                      value={formData.name}
                      onChange={e =>
                        changeHandler(e.currentTarget.value, 'name')
                      }
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
                      type="number"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={e =>
                        changeHandler(e.currentTarget.value, 'phone')
                      }
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
                      value={formData.email}
                      onChange={e =>
                        changeHandler(e.currentTarget.value, 'email')
                      }
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
                      value={formData.subject}
                      onChange={e =>
                        changeHandler(e.currentTarget.value, 'subject')
                      }
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
                    value={formData.message}
                    onChange={e =>
                      changeHandler(e.currentTarget.value, 'message')
                    }
                    className="block h-40 mt-2 w-full border-2 border-transparent shadow-input py-3 pl-3 rounded placeholder:text-gray-500 text-gray-500 sm:text-sm sm:leading-6"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                disabled={onLoading}
                className="mt-10 mr-5 float-right text-white cursor-pointer text-base font-poppinsLight py-2.5 px-5 rounded-full bg-main-green"
              >
                {onLoading ? 'Please wait ...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Content;
