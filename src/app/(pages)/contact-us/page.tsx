'use client';
import { useEffect, useState } from 'react';
import Header from '@/app/components/header/header';
import Image from 'next/image';
import Footer from '@/app/components/footer/footer';
import { useToast } from '@/components/ui/use-toast';
import Contactus from '../../../../public/assets/contactus.jpg';

const ContactUs = () => {
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
      !formData.email
      //   !formData.subject ||
      //   !formData.phone ||
      //   !formData.message
    ) {
      toast({
        variant: 'destructive',
        description: 'Please fill all the required fields',
      });
      setLoading(false);
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
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>
      <section
        id="contact-us"
        className="bg-white md:px-20 lg:px-20 px-10 py-10 mt-10"
      >
        <div className="flex justify-between text-left lg:flex-row md:flex-row flex-col">
          <div className="basis-1/2 m-auto ">
            <div className="mt-10 text-5xl font-bold">
              <span className="text-black">
                Get in touch with the
                <span className="text-main-green"> Enoobs </span> team.
              </span>
            </div>
            <div className="  mt-8 md:mt-2 lg:mt-2 text-base font-poppinsLight font-medium text-main-gray">
              Feel free to drop us an email anytime. We’d love to hear from you.
            </div>
          </div>
          <div className="basis-1/2 m-auto ">
            <Image
              src={Contactus}
              className="float-right w-96 h-96"
              alt="about-us"
            />
          </div>
        </div>
        <div className="flex flex-col ">
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
                      {/* <span className="text-red-400">*</span> */}
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
                      {/* <span className="text-red-400">*</span> */}
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
                    {/* <span className="text-red-400">*</span> */}
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
      <Footer />
    </div>
  );
};

export default ContactUs;
