import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

export const items = [
  {
    title: 'What is Enoobs?',
    content: `Enoobs is a decentralized identifier (DID) provider for gamers.
    Using the Enoobs ecosystem, you can aggregate their stats & assets from across gaming platforms and get a chance to showcase & monetize your gaming skills.`,
  },
  {
    title: 'What is Universal Gaming Identity?',
    content: `Universal Gaming Identity gives you your own universal digital identity using which you can showcase, compete and earn.`,
  },
  {
    title: 'What is DID?',
    content: `DID is a blockchain-based identifier. DID helps you to stay in control of your private data and prove your identity digitally without having to share your personal information.`,
  },
  {
    title: 'How can you join the Gaming Community on Enoobs?',
    content: `You can join 100s of gaming communities hosted on Enoobs through the Enoobs mobile app, initially. You can also host your gaming communities and start sharing.`,
  },
  {
    title: 'Is Enoobs Paid or Free?',
    content: `Enoobs is entirely free. From grabbing your gaming DID to hosting your communities, we do not charge for anything.`,
  },
  {
    title: 'What is Enoobs Social Media?',
    content: `It is a kind of community-driven social media platform where gamers can connect with each other and join gaming communities globally. It also comes with a creator economy only for gaming content creators.`,
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setActiveIndex(prevActiveIndex => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter(activeIdx => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  return (
    <section className="lg:w-35rem md:w-35rem text-black w-80 mx-auto">
      {items.map(({ title, content }, index) => (
        <div
          key={index}
          className="border border-gray-300 mb-3 rounded-2xl p-4 hover:bg-slate-50"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between w-full items-center focus:outline-none"
          >
            <h4 className="flex-1 text-lg text-left font-semibold">{title}</h4>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                activeIndex.includes(index) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex.includes(index) && (
            <div className="mt-3">
              <p className="text-base">{content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
