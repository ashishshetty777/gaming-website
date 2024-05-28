import Image from 'next/image';
import Logo from '../../../../public/assets/enoobs_logo.png';
import GooglePlayBtn from '../../../../public/assets/get_it_on.png';
import Youtube from '../../../../public/assets/Youtube-green.png';
import Linkedin from '../../../../public/assets/Linkedin-green.png';
import X from '../../../../public/assets/X-green.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=" px-7 pt-20 pb-20 lg:pb-7 md:pb-7 bg-dark-blue z-50 relative">
      <div className="block lg:hidden md:hidden">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image
            className="sm:basis-full h-22 w-44 m-auto md:float-left lg:float-left"
            src={Logo}
            alt=""
          ></Image>
        </Link>
        <div className=" lg:text-left md:text-left text-md font-extralight text-white text-center">
          <Image
            className="sm:basis-full h-22 w-44 m-auto md:float-left mt-5 lg:float-left"
            src={GooglePlayBtn}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="flex grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 p-6 lg:px-8 md:px-8">
        <div className="hidden lg:block md:block">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="sm:basis-full h-22 w-44 m-auto md:float-left lg:float-left"
              src={Logo}
              alt=""
            ></Image>
          </Link>
          <div className="lg:text-left md:text-left text-md font-extralight text-white text-center">
            <Image
              className="sm:basis-full h-22 w-44 m-auto md:float-left mt-5 lg:float-left"
              src={GooglePlayBtn}
              alt=""
            ></Image>
          </div>
        </div>
        <div className="hidden lg:block md:block lg:ml-20 md:ml-20 ml-0 text-center lg:text-left md:text-left">
          <div className="">
            <div className="text-lg px-2 font-bold text-white">Quick Links</div>
            <Link
              href="#about-us"
              className="mt-5 px-2 text-md font-extralight text-white grid"
            >
              About Us
            </Link>
            <Link
              href="#contact-us"
              className="mt-2 px-2 text-md font-extralight text-white grid"
            >
              Contact Us
            </Link>
            <Link
              href="#team"
              className="mt-2 px-2 text-md font-extralight text-white grid"
            >
              Team
            </Link>
          </div>
        </div>
        <div className=" text-center lg:text-left md:text-left">
          <div className="text-lg px-2 font-bold text-white">Useful Links</div>
          <Link
            href="https://www.enoobs.com/privacy-policy/"
            target="_blank"
            className="mt-5 px-2 text-md font-extralight text-white grid"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://www.enoobs.com/terms-conditions/"
            target="_blank"
            className="mt-2 px-2 text-md font-extralight text-white grid"
          >
            Terms & Conditions
          </Link>
        </div>
        <div>
          <div className="hidden lg:block md:block">
            <div className="text-lg px-2 font-bold text-white">
              Join our mailing list and hear about new features
            </div>
            <div className="relative mt-4 ml-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
                <span className="text-white text-base">→</span>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full bg-dark-blue rounded-md border py-1.5 pl-7 pr-20 text-white placeholder:text-gray-400 sm:text-base sm:leading-6"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="text-center block lg:hidden md:hidden">
            <div className="text-lg px-2 font-bold text-white">Quick Links</div>
            <Link
              href="#about-us"
              className="mt-5 px-2 text-md font-extralight text-white grid"
            >
              About Us
            </Link>
            <Link
              href="#contact-us"
              className="mt-2 px-2 text-md font-extralight text-white grid"
            >
              Contact Us
            </Link>
            <Link
              href="#team"
              className="mt-2 px-2 text-md font-extralight text-white grid"
            >
              Team
            </Link>
          </div>
        </div>
      </div>
      <div className="w-4/5 m-auto block lg:hidden md:hidden">
        <div className="text-lg text-center px-2 font-bold text-white">
          Join our mailing list and hear about new features
        </div>
        <div className="relative mt-4 ml-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
            <span className="text-white text-base">→</span>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className="block w-full bg-dark-blue rounded-md border py-1.5 pl-7 pr-20 text-white placeholder:text-gray-400 sm:text-base sm:leading-6"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="w-full bg-dark-blue relative">
        <div className="float-left ml-0 lg:ml-7 md:ml-7 text-base font-extralight w-full text-white lg:w-max md:w-max text-center lg:text-right md:text-right">
          <div className="w-full">
            <div className="justify-center w-full pt-4 md:justify-end lg:justify-end lg:absolute md:absolute right-5 -bottom-5 flex">
              <Link href="https://www.youtube.com/@Enoobs-tech" target="_blank">
                <Image
                  className="cursor-pointer w-8 h-8 mr-4"
                  src={Youtube}
                  alt="Youtube"
                ></Image>
              </Link>
              <Link
                href="https://www.linkedin.com/company/enoobs/"
                target="_blank"
              >
                <Image
                  className="cursor-pointer w-8 h-8 mr-4"
                  src={Linkedin}
                  alt="linkedin"
                ></Image>
              </Link>
              <Link
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FEnoobs_India"
                target="_blank"
              >
                <Image
                  className="cursor-pointer w-8 h-8 mr-4"
                  src={X}
                  alt="X"
                ></Image>
              </Link>
            </div>
          </div>
          © 2024 Enoobs. All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
