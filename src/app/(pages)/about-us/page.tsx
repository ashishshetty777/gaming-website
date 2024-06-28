'use client';
import Header from '@/app/components/header/header';
import Image from 'next/image';
import Aboutus from '../../../../public/assets/about-us.jpg';
import Footer from '@/app/components/footer/footer';
import Team1 from '../../../../public/assets/anish-min.jpg';
import Team2 from '../../../../public/assets/ved-min.jpg';
import Team3 from '../../../../public/assets/Gagan-min.jpg';
import Team4 from '../../../../public/assets/Vishwa-min.jpg';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>
      <section id="about-us" className="md:px-20 lg:px-20 px-10 py-10 mt-10">
        <div className="pt-10 mt-0 text-center text-4xl">
          <div className="mb-4 font-poppins text-black"> About Us</div>
          <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-center">
            <div className="basis-1/2 lg:text-left md:text-center text-center pt-5 text-base font-poppinsLight text-main-gray">
              <p className="pt-10">
                At Enoobs, we create unified and verified gamer identities by
                combining KYC verifiability, robust stats aggregation, and
                detailed gaming achievements. Our platform showcases your skills
                across all partnered platforms, streamlining your gaming journey
                with a game-specific Single Sign-On (SSO) system for effortless
                access.
              </p>
              <p className="pt-2">
                Enoobs is a centralized hub for discovering and managing
                cross-platform events and tournaments, making it easy to track
                your participation and achievements. We also provide valuable
                analytics to gaming companies, offering insights into user
                behavior and market trends to inform data-driven decisions.
              </p>
              <p className="pt-2">
                Join Enoobs to enhance your gaming experience with a unified
                identity, seamless integration, vibrant social interactions, and
                comprehensive event management.
              </p>
            </div>
            <div className="pt-10 mx-auto basis-1/2">
              <Image src={Aboutus} alt="about-us" />
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="bg-white md:px-20 lg:px-20 px-10 py-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Our Team
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center  bg-gray-50 rounded-lg shadow sm:flex">
              <div className="lg:w-2/4 md:w-2/4 w-full">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team1}
                  alt="Bonnie Avatar"
                ></Image>
              </div>
              <div className="p-5 lg:w-2/4 md:w-2/4 w-full">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <span>Anish Kapoor</span>
                </h3>
                <span className="text-gray-500">Chief executive Officer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Product Owner NexBloc, Securvaults, Iotric
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {/* <li>
                    <a
                      href=""
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                      </svg>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anishkapoor999/?original_referer=https%3A%2F%2Fwww.enoobs.com%2F"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <div className="lg:w-2/4 md:w-2/4 w-full">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team2}
                  alt="Jese Avatar"
                ></Image>
              </div>
              <div className="p-5 lg:w-2/4 md:w-2/4 w-full">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <span>Ved Prakash</span>
                </h3>
                <span className="text-gray-500">Chief Technology Officer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Serial Entrepenuer Iotric, NexBloc, MyIDFI
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {/* <li>
                    <a
                      href=""
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                      </svg>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/prakashved04/"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <div className="lg:w-2/4 md:w-2/4 w-full">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team3}
                  alt="Michael Avatar"
                ></Image>
              </div>
              <div className="p-5 lg:w-2/4 md:w-2/4 w-full">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <span>Gagandeep Singh</span>
                </h3>
                <span className="text-gray-500">Technical Lead</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Team Lead Izzyhomes, ThirdEye, FriendsChat
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {/* <li>
                    <a
                      href=""
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                      </svg>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gagandeep-negi-45253942/"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
              <div className="lg:w-2/4 md:w-2/4 w-full">
                <Image
                  className="w-500 sm:h-auto md:h-full lg:h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={Team4}
                  alt="Sofia Avatar"
                ></Image>
              </div>
              <div className="p-5 lg:w-2/4 md:w-2/4 w-full">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <span>Vishwanath Reddy</span>
                </h3>
                <span className="text-gray-500">Solutions Architect</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Technical Architect Croplife, Hindxr, Kardiogenics
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {/* <li>
                    <a
                      href=""
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                      </svg>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/viswanath-reddy-s-242874111/"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
