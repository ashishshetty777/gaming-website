'use client';

import Image from 'next/image';
import GooglePlayBtn from '../../../../public/assets/get_it_on.png';
import Ethereum from '../../../../public/assets/Ethereum.png';
import Polygon from '../../../../public/assets/Polygon.png';
import Ripple from '../../../../public/assets/Ripple.png';
import Solana from '../../../../public/assets/Solana.png';
import Stellar from '../../../../public/assets/Stellar.png';
import Avalanche from '../../../../public/assets/Avalanche.png';
import Mobile from '../../../../public/assets/get_the_best.png';
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
const Content = () => {
  return (
    <>
      <div className="bg-black lg:bg-unset md:bg-unset">
        <video
          className="bg-vid hidden lg:block md:block w-full object-center absolute left-0 right-0 top-0 z-minus"
          poster={'assets/Hero.png'}
          autoPlay
          loop
          muted
          // controls
        >
          <source src={'/assets/main-bg.mp4'} type="video/mp4" />
        </video>
        <section className="md:px-20 lg:px-20 px-10 py-10">
          <div className="py-5 md:px-10 lg:px-10 px-1 text-white text-center">
            <div className="text-5xl font-poppins">
              {' '}
              Create <br></br>
              Your <span className="text-main-green">Universal</span>
              <br></br>
              Gaming ID
            </div>
            <div className="pt-6 text-xs font-extralight">
              It is a long established fact that a reader will be distracted{' '}
              <br></br> by the readable content of a page.
            </div>
          </div>
          <div className="w-full">
            <Image
              className="m-auto h-10 w-32"
              src={GooglePlayBtn}
              alt="Google-play"
            />
          </div>
        </section>
      </div>
      <section className="md:px-20 lg:px-20 px-10 py-10 bg-white">
        <div className="pt-10 text-center text-2xl">
          <div className="font-poppins text-black">
            {' '}
            Get the best of your blockchains
          </div>
          <div className="pt-1 text-xs text-main-gray">
            It is a long established fact that a reader will <br></br> be
            distracted by the readable content of a page.
          </div>
        </div>
        <div className="w-full pt-5 px-0 lg:px-32 md:px-10">
          <div className="flex  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 m-auto justify-center justify-items-center">
            <div className="mt-2 lg:mt-0 md:mt-0 flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center bg-pill-bg-green border border-pill-border">
              <Image alt="Ethereum" className="h-4 w-4" src={Ethereum} />
              <div className="ml-1 text-xs font-semibold text-black">
                Ethereum
              </div>
            </div>
            <div className="mt-2 lg:mt-0 md:mt-0 flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center bg-pill-bg-green border border-pill-border">
              <Image alt="Polygon" className="h-4 w-4" src={Polygon} />
              <div className="ml-1 text-xs font-semibold text-black">
                Polygon
              </div>
            </div>
            <div className="mt-2 lg:mt-0 md:mt-0 flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center bg-pill-bg-green border border-pill-border">
              <Image alt="Avalanche" className="h-4 w-4" src={Avalanche} />
              <div className="ml-1 text-xs font-semibold text-black">
                Avalanche
              </div>
            </div>
            <div className="mt-2 lg:mt-0 md:mt-2 flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center bg-pill-bg-green border border-pill-border">
              <Image alt="Ripple" className="h-4 w-4" src={Ripple} />
              <div className="ml-1 text-xs font-semibold text-black">
                Ripple
              </div>
            </div>
            <div className="mt-2 lg:mt-0 md:mt-2 flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center bg-pill-bg-green border border-pill-border">
              <Image alt="Stellar" className="h-4 w-4" src={Stellar} />
              <div className="ml-1 text-xs font-semibold text-black">
                Stellar
              </div>
            </div>
            <div className="mt-2 lg:mt-0 md:mt-2 flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center bg-pill-bg-green border border-pill-border">
              <Image alt="Solana" className="h-4 w-4" src={Solana} />
              <div className="ml-1 text-xs font-semibold text-black">
                Solana
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 text-left lg:text-center md:text-center text-2xl font-poppins text-black">
          There are many variations of <br></br> passages of Lorem Ipsum
        </div>
        <div className="block lg:hidden md:hidden relative">
          <div className="ml-0 mr-0 flex flex-col">
            <div className="mt-5">
              <div className="text-xl text-black font-bold">
                Unique Gaming ID
              </div>
              <div className="text-xs text-black">
                It is a long established fact that a reader will <br></br> be
                distracted by the readable.
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-bold text-black">
                Unique Gaming ID
              </div>
              <div className="text-xs text-black">
                It is a long established fact that a reader will <br></br> be
                distracted by the readable.
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-bold text-black">
                Unique Gaming ID
              </div>
              <div className="text-xs text-black">
                It is a long established fact that a reader will <br></br> be
                distracted by the readable.
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-bold text-black">
                Unique Gaming ID
              </div>
              <div className="text-xs text-black">
                It is a long established fact that a reader will <br></br> be
                distracted by the readable.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 hidden lg:block md:block relative">
          {/* <Image className="w-3/5 h-3/5 m-auto" src={Circle} alt="circle-bg" /> */}
          <div className="ml-0 mr-0 flex grid grid-cols-3">
            <div className="relative md:px-1 lg:px-20">
              <div className="pt-10 relative">
                <Image
                  className="w-20 absolute h-20 m-auto"
                  src={Ellipse1}
                  alt="Ellipse1"
                  style={{ top: '-50px' }}
                />
                <div className="text-xl font-bold text-black">
                  <Image
                    className="w-20 absolute h-20 m-auto"
                    src={Ellipse3}
                    alt="Ellipse3"
                    style={{ top: '100px', left: '-90px' }}
                  />
                  Unique Gaming ID
                </div>
                <div className="text-xs text-black">
                  It is a long established fact that a reader will <br></br> be
                  distracted by the readable.
                </div>
              </div>
              <div className="pt-20 relative">
                <Image
                  className="w-20 absolute h-20 m-auto"
                  src={Ellipse2}
                  alt="Ellipse2"
                  style={{ top: '170px' }}
                />

                <div className="text-xl font-bold text-black">
                  Unique Gaming ID
                </div>
                <div className="text-xs text-black">
                  It is a long established fact that a reader will <br></br> be
                  distracted by the readable.
                </div>
              </div>
            </div>
            <div>
              <Image className="h-96 w-48 m-auto" src={Mobile} alt="mobile" />
            </div>
            <div className="relative md:px-5 lg:px-20">
              <div className="pt-10 relative">
                <Image
                  className="w-20 absolute h-20 m-auto"
                  src={Ellipse4}
                  alt="Ellipse4"
                  style={{ top: '-50px', right: '20px' }}
                />
                <div className="text-xl font-bold">
                  <Image
                    className="w-20 absolute h-20 m-auto"
                    src={Ellipse5}
                    alt="Ellipse5"
                    style={{ top: '100px', right: '-50px' }}
                  />
                  Unique Gaming ID
                </div>
                <div className="text-xs">
                  It is a long established fact that a reader will <br></br> be
                  distracted by the readable.
                </div>
              </div>
              <div className="pt-20 relative">
                <Image
                  className="w-20 absolute h-20 m-auto"
                  src={Ellipse6}
                  alt="Ellipse6"
                  style={{ top: '170px', right: '10px' }}
                />

                <div className="text-xl font-bold">Unique Gaming ID</div>
                <div className="text-xs">
                  It is a long established fact that a reader will <br></br> be
                  distracted by the readable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-blue md:px-20 lg:px-20 px-10 py-10  md:h-500 lg:h-500">
        <div className="pt-10 text-center text-white text-2xl">
          <div className="font-poppins"> Supported Web3-Games</div>
        </div>
        <div className=" w-full pt-5 overflow-auto">
          <div className="flex m-auto justify-center">
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Sorare</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Planet IX</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">The Sandbox</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Axie Infinity</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Illuvium</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Decentraland</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Aurory</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">DeFi Land</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">Funfair</div>
            </div>
            <span className="h-1.5 mt-2.5 w-1.5 bg-main-green rounded-full"></span>
            <div className="flex rounded-full mr-3 w-24 text-center py-1 px-2 justify-center text-white">
              <div className="ml-1 text-xs font-extralight">CryptoKitties</div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-slate-700 mt-8 pt-10  text-white">
          <div className="basis-1/2 text-2xl">
            Lorem Ipsum is simply <br></br> dummy text of the
          </div>
          <div className="basis-1/2 text-xs font-extralight mt-4 h-8 border-l-2 pl-4 border-main-green">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="flex grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-10 justify-center">
          <div className="p-4 bg-white mt-2 md:mt-0 lg:mt-0 rounded-md text-center mr-0 md:mr-4 lg:mr-4 shadow-card">
            <div className="text-xl font-bold text-black">Feature 1</div>
            <div className="text-xs text-black">
              It is a long established fact that a reader will <br></br> be
              distracted by the readable.
            </div>
            <Image className="w-28 h-60 m-auto mt-5" src={Mobile} alt="phone" />
          </div>
          <div className="p-4 bg-white mt-2 md:mt-0 lg:mt-0 rounded-md text-center mr-0 md:mr-4 lg:mr-4 shadow-card">
            <div className="block md:hidden lg:hidden">
              <div className="text-xl font-bold text-black">Feature 2</div>
              <div className="text-xs mb-5 text-black">
                It is a long established fact that a reader will <br></br> be
                distracted by the readable.
              </div>
            </div>
            <Image className="w-28 h-60 m-auto " src={Mobile} alt="phone" />
            <div className="hidden md:block lg:block">
              <div className="text-xl font-bold text-black mt-5">Feature 2</div>
              <div className="text-xs text-black">
                It is a long established fact that a reader will <br></br> be
                distracted by the readable.
              </div>
            </div>
          </div>
          <div className="p-4 bg-white mt-2 md:mt-0 lg:mt-0 rounded-md text-center mr-0 md:mr-4 lg:mr-4 shadow-card">
            <div className="text-xl font-bold text-black">Feature 3</div>
            <div className="text-xs text-black">
              It is a long established fact that a reader will <br></br> be
              distracted by the readable.
            </div>
            <Image className="w-28 h-60 m-auto mt-5" src={Mobile} alt="phone" />
          </div>
        </div>
      </section>
      <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="pt-10 mt-0 md:mt-60 lg:mt-60 text-center text-2xl">
          <div className="font-poppins text-black"> Roadmap</div>
          <div className="flex grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 mt-10 justify-center">
            <div className="basis-1/2">
              <div className="flex">
                <Image className="h-12 w-10" src={FirstFlag} alt="first" />
                <div className="w-full hidden md:block lg:block h-px border-t-2 border-main-green mt-8 "></div>
              </div>
              <div className="text-xs text-left mr-4">
                <div className="font-bold bg-text-bg text-black mt-2 w-fit p-1">
                  2023
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 lg:mt-0">
              <div className="flex ">
                <Image className="h-12 w-10" src={SecondFlag} alt="first" />
                <div className="w-full hidden md:block lg:block h-px border-t-2 border-dashed border-main-green mt-8 "></div>
              </div>
              <div className="text-xs text-left mr-4">
                <div className="font-bold bg-text-bg text-black mt-2 w-fit p-1">
                  2024
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 lg:mt-0">
              <div className="flex">
                <Image className="h-12 w-10" src={ThirdFlag} alt="first" />
                <div className="w-full hidden md:block lg:block h-px border-t-2 border-dashed border-slate-200 mt-8 "></div>
              </div>
              <div className="text-xs text-left mr-4">
                <div className="font-bold bg-text-bg text-black mt-2 w-fit p-1">
                  2025
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 lg:mt-0">
              <div className="flex">
                <Image className="h-12 w-10" src={FourthFlag} alt="first" />
              </div>
              <div className="text-xs text-left mr-4">
                <div className="font-bold bg-text-bg text-black mt-2 w-fit p-1">
                  2026
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="bg-text-bg mt-2 p-1 text-black">
                  Lorem Ipsum is simply dummy text of.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="pt-10 text-center text-2xl">
          <div className="font-poppins text-black"> Meet the team</div>
          <div className="pt-6 text-xs text-black font-extralight">
            It is a long established fact that a reader will be distracted{' '}
            <br></br> by the readable content of a page.
          </div>
        </div>
        <div className="flex w-full flex-row mt-10 grid lg:grid-cols-4 md:grid-cols-2 justify-center">
          <div className="w-fit mx-auto">
            <Image className="w-60 h-56" src={Team1} alt="team-1" />
            <div className="w-60 h-56 bg-dark-blue p-4">
              <div className="text-2xl font-bold text-white">Anish Kapoor</div>
              <div className="text-md my-2 font-light text-white">
                Chief Executive Officer
              </div>
              <div className="text-md my-2 font-light text-white">
                Product Owner NexBloc, Securvaults, Iotric
              </div>
              {/* <div className="flex mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div> */}
            </div>
          </div>
          <div className="w-fit mt-10 md:mt-0 lg:mt-0 mx-auto">
            <Image className="w-60 h-56" src={Team2} alt="team-1" />
            <div className="w-60 h-56 bg-dark-blue p-4">
              <div className="text-2xl font-bold text-white">Ved Prakash</div>
              <div className="text-md my-2 font-light text-white">
                Chief Technology Officer
              </div>
              <div className="text-md my-2 font-light text-white">
                Serial Entrepenuer Iotric, NexBloc, MyIDFI
              </div>
              {/* <div className="flex  mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div> */}
            </div>
          </div>
          <div className="w-fit mt-10 md:mt-10 lg:mt-0 mx-auto">
            <Image className="w-60 h-56" src={Team3} alt="team-1" />
            <div className="w-60 h-56 bg-dark-blue p-4">
              <div className="text-2xl font-bold text-white">
                Gagandeep Singh
              </div>
              <div className="text-md my-2 font-light text-white">
                Technical Lead
              </div>
              <div className="text-md my-2 font-light text-white">
                Team Lead Izzyhomes, ThirdEye, FriendsChat
              </div>
              {/* <div className="flex mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div> */}
            </div>
          </div>
          <div className="w-fit mt-10 md:mt-10 lg:mt-0 mx-auto">
            <Image className="w-60 h-56" src={Team4} alt="team-1" />
            <div className="w-60 h-56 bg-dark-blue p-4">
              <div className="text-2xl font-bold text-white">
                Vishvanath Reddy
              </div>
              <div className="text-md my-2 font-light text-white">
                Solutions architect
              </div>
              <div className="text-md my-2 font-light text-white">
                Technical Architect Croplife, Hindxr, Kardiogenics
              </div>
              {/* <div className="flex mt-4">
                <Image className="mr-4" src={Fb} alt="facebook"></Image>
                <Image className="mr-4" src={Instagram} alt="Instagram"></Image>
                <Image className="" src={Twitter} alt="Twitter"></Image>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="flex grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div>
            <div className="text-5xl font-bold text-black">
              Frequently asked questions
            </div>
            <div className="mt-6 font-medium text-main-gray  mb-10 md:mb-10 lg:mb-0">
              Explore common queries about <br></br> Enoobs and its benefits
            </div>
          </div>
          <Faq />
        </div>
      </section>
      <section className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="flex md:text-left lg:text-left text-center lg:flex-row md:flex-row flex-col ">
          <div className="text-5xl font-bold">
            <span className="text-black"> Say </span>
            <span className="text-main-green"> hello. </span>
          </div>
          <div className="ml-4 mt-6 md:mt-1 lg:mt-1 text-xs font-medium text-main-gray">
            Feel free to drop us an email anytime.<br></br> We’d love to hear
            from you.
          </div>
        </div>
        <div className="mt-12 ">
          <div className="flex grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-between">
            <div>
              <form>
                <div className="flex flex-col md:flex-row lg:flex-row">
                  <div className="relative basis-full md:basis-1/2 lg:basis-1/2 mt-4">
                    <label
                      htmlFor="firstName"
                      className="pl-3 text-main-green text-black"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="block w-full border-b py-1.5 pl-3 pr-20 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="First name"
                    />
                  </div>
                  <div className="relative md:basis-1/2 lg:basis-1/2 mt-4">
                    <label
                      htmlFor="lastName"
                      className="pl-3 text-main-green text-black"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="block w-full border-b py-1.5 pl-3 pr-20 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="relative mt-4">
                  <label
                    htmlFor="subject"
                    className="pl-3 text-main-green text-black"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block w-full border-b py-1.5 pl-3 pr-20 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Subject"
                  />
                </div>
                <div className="relative mt-4">
                  <label
                    htmlFor="message"
                    className="pl-3 text-main-green text-black"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="message"
                    className="block w-full border-b py-1.5 pl-3 pr-20 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Message"
                  />
                </div>
                <button className="mt-4 text-white cursor-pointer text-xs py-2 px-4 rounded-full bg-black">
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-10 md:mt-10 lg:mt-0 ml-0 lg:ml-10 md:ml-0">
              <div className="text-2xl text-black font-medium">Need help?</div>
              <div className="text-xs font-medium mt-5  text-main-gray">
                If you are already a Enoobs member and you are having a
                <br className="hidden md:block lg:block"></br>
                {` Enoobs related question or problem, please contact to our`}
                <br className="hidden md:block lg:block"></br>
                support team and they will get back to you shortly.
              </div>
              <button className="mt-4 text-white cursor-pointer text-xs py-2 px-4 rounded-full bg-black">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
