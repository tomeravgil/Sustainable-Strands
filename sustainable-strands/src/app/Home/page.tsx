"use client";
import { cn } from "../utils/cn";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { FlipWords } from "../components/ui/flip-words";
import { CardStack } from "../components/ui/card-stack";
import hempCrete from "../../app/images/hempcrete.jpg";
import HempMilk from "../../app/images/hempmilk.jpg";
import HempTile from "../../app/images/hemptile.jpg";
import HempBar from "../../app/images/hempbar.jpg";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
export default function Home() {
  return (
    <main className="min-h-screen items-center justify-start overflow-hidden dark:bg-black">
      <Navbar className="top-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-gray-300 to-background opacity-70 dark:bg-black dark:bg-none blur-2xl"/>
      <div className="relative z-10 items-center space-y-10">
        <GoogleGeminiEffectDemo />
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Discover Hemp's Power: Explore Our Marketplace
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full space-y-10 md:space-y-0">
          
          <FlipWordsDemo />
          <CardStackDemo />        
        </div>
      </div>
      <PlaceholdersAndVanishInputDemo />
      <Footer/>
    </main>
  );
}

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Company name"
            />
            <p className="text-sm leading-6 text-gray-600">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-500 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-500 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-500 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-500 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What is the difference between hemp and cannibus?",
    "Is hemp good for the environment?",
    "Is hemp the same as marijuana?",
    "What can hemp be used for?",
    "Is hemp legal to grow?",
    "What are the benefits of using hemp?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Still Confused? Ask Our AI
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

const Comparison = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Hemp is Not Cannabis
      </h2>
      <div className="flex flex-col md:flex-row bg-white p-6 shadow-md rounded-lg max-w-4xl w-full">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-500 pb-2">Hemp</h2>
          <ul className="checkmark-list text-left">
            <li className="checked">Eco-Friendly Material: Hemp is a sustainable alternative for textiles, paper, and biodegradable plastics.</li>
            <li className="checked">Nutritional Value: Rich in protein, omega-3 and omega-6 fatty acids, hemp seeds are a superfood.</li>
            <li className="checked">Industrial Uses: Hemp fibers are incredibly strong and used in construction materials like hempcrete.</li>
            <li className="checked">Environmental Benefits: Hemp absorbs CO2 and improves soil health, making it an eco-friendly crop.</li>
            <li className="checked">Legal and Safe: Hemp contains negligible THC, ensuring no psychoactive effects and making it widely legal.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Cannabis</h2>
          <ul className="checkmark-list text-left">
            <li className="checked">Medical Applications: Cannabis is known for its therapeutic properties, aiding in pain relief, anxiety, and more.</li>
            <li className="checked">Recreational Use: Provides psychoactive effects sought after for recreational purposes.</li>
            <li className="checked">High THC Content: Cannabis plants are bred for high THC levels, contributing to their psychoactive properties.</li>
            <li className="checked">Variety of Strains: Wide range of strains available, each with unique effects and benefits.</li>
            <li className="checked">Legalization and Regulation: Cannabis laws vary widely, with ongoing debates around its legalization for medical and recreational use.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};









export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "HempCrete",
    designation: "Sustainable and eco-friendly concrete alternative made from hemp fibers. Provides excellent insulation and reduces carbon footprint.",
    content: (
      <></>
    ),
    image: hempCrete
  },
  {
    id: 1,
    name: "Hemp Milk",
    designation: "Nutritious and dairy-free milk alternative made from hemp seeds. Rich in omega-3 and protein, perfect for a healthy lifestyle.",
    content: (
      <></>
    ),
    image: HempMilk
  },
  {
    id: 2,
    name: "Hemp Textile",
    designation: "Durable and eco-friendly fabrics made from hemp fibers. Naturally resistant to mold, UV rays, and suitable for a variety of clothing and home goods.",
    content: (
      <></>
    ),
    image: HempTile
  },
  {
    id: 3,
    name: "Hemp Rebar",
    designation: "Innovative and strong reinforcement bars made from hemp. Ideal for sustainable construction projects, offering high tensile strength and corrosion resistance.",
    content: (
      <></>
    ),
    image: HempBar
  },
];


export function FlipWordsDemo() {
  const words = ["Manufacture", "Build", "Create", "Explore"];
 
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400"><FlipWords words={words} /><br />
        with Hemp
      </div>
    </div>
  );
}



export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.15], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.15], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.15], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.15], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.15], [0, 1.2]);

  return (
    <div
      className="h-[125vh] z-50 w-full  rounded-md relative  overflow-clip"
      ref={ref}
    >
      <Strands
        title="Sustainable Strands"
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}




const transition = {
  duration: 0,
  ease: "linear",
};

const Strands = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {



  return (
    <div className={cn("sticky top-40 w-screen", className)}>
      <div className="pt-36">
        <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text bg-gradient-to-b text-title from-title to-title">
          {title || `Strands Shaping the Future`}
        </p>
        <div className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-xl mx-auto">
          <div className="pb-4">Sustainable Strands is here to transform the future of Hemp </div>
          <div className="flex justify-center items-center pt-2">
          <HoverBorderGradientDemo/>
          <a href="#" className="text-sm font-semibold leading-6 text-neutral-600 ml-4">
              Learn more <span aria-hidden="true">→</span>
          </a>
          </div>

        </div>
      </div>


      <svg
        width="100%"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 w-full"
      >
        <motion.path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
          stroke="#D2B48C"
          strokeWidth="3"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="#E1C699"
          strokeWidth="3"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#F5F5DC"
          strokeWidth="3"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
          stroke="#556B2F"
          strokeWidth="3"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={{ duration: 1 }}
        />

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

 






export function HoverBorderGradientDemo() {
  return (
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-green  light:text-white dark:text-black flex items-center text-sm transition ease-in hover:text-text dark:hover:text-white delay-100"
        duration={.25}
      >
        <span >Get Started</span>
      </HoverBorderGradient>
  );
}


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <a className="dark:text-white" href="/Login">Log In</a>
      </Menu>
    </div>
  );
}
