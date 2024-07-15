"use client"
import React, { useState } from "react";
import NavBar from "../components/NavBar/navBar";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

interface Business {
    BusinessName: string;
    businessType: string;
    Primary: string;
    Town: string;
    State: string;
    Phone: string;
    Email: string;
    imageSrc: string;
}

export default function MarketPlace(){
    const businesses: Business[] = [
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        { BusinessName: "Business 1", businessType: "Retail", Primary: "Card 1", Town: "Town 1", State: "MA", Phone: "123-456-7890", Email: "email1@example.com", imageSrc: "" },
        { BusinessName: "Business 2", businessType: "Services", Primary: "Card 2", Town: "Town 2", State: "NY", Phone: "234-567-8901", Email: "email2@example.com", imageSrc: "" },
        { BusinessName: "Business 3", businessType: "Manufacturing", Primary: "Card 3", Town: "Town 3", State: "CA", Phone: "345-678-9012", Email: "email3@example.com", imageSrc: "" },
        // Add more businesses as needed
      ];

    return (
        <main className="">
            <NavBar />
            <Filter/>
            <div className="mt-10 bg-base grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-2 mx-4">
            {businesses.map((business) => (
            <Card business={business} />
            ))}
            </div>
            <Footer/>
        </main>
    );
}


function Filter(){
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            </div>
            <div className="flex-none gap-2">

            <div className="join flex items-center py-2 pr-1">
                <div>
                    <div>
                    <input className="input input-bordered join-item" placeholder="Business Name"/>
                    </div>
                </div>
                <Modal/>
                <div className="indicator">
                    <button className="btn join-item btn-bordered">Search</button>
                </div>
            </div>
            </div>
      </div>
    );
}


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="block text-black btn join-item focus:outline-none  font-medium text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Filter
      </button>

      {/* Main modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Add Filter
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price Max
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$/lbs"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Filters
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




function Card({ business }: { business: Business }) {
    const style = "inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-"

    const telephone = "tel:" + business.Phone;
    const email = "mailto:" + business.Email
    return (
        <div className="mx-16 md:mx-5 sm:mx-1 max-w overflow-hidden rounded-lg bg-base-100 shadow">
            {business.imageSrc!=="" ? (
                <img src={business.imageSrc} className="aspect-video w-full object-cover"/>
            ) : (
                <div className="aspect-video w-full flex items-center justify-center object-cover">
                    <div className="bg-gray-300 p-5 rounded-lg text-2xl">
                        🌿
                    </div>
                </div>
            )}
            <div className="p-4">
                <h3 className="text-xl font-medium text-base-content">{business.BusinessName}</h3>
                <div className="flex row items-center">
                    <p className="mb-2 mr-1 text-sm text-neutral-content">{business.Primary} • </p>
                    <a href={email}><MdOutlineMailOutline className="mb-2 mr-1 text-neutral-content"/> </a>
                    <a href={telephone}><MdOutlineLocalPhone className="mb-2 text-neutral-content"/></a>
                </div>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className="mt-4 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">Design</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">Product</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">Develop</span>
                </div>
            </div>
        </div>


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