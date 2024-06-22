import React from "react";
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

        </main>
    );
}


function Filter(){
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            <a className="btn btn-ghost text-xl text-base-content">daisyUI</a>
            </div>
            <div className="flex-none gap-2">

            <div className="join">
                <div>
                    <div>
                    <input className="input input-bordered join-item" placeholder="Search"/>
                    </div>
                </div>
                <select className="select select-bordered outline-none join-item">
                    <option disabled selected className="text-base-content">Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
                <div className="indicator">
                    <button className="btn join-item btn-bordered">Search</button>
                </div>
            </div>
            </div>
      </div>
    );
}

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
                    <input type="radio" name="rating-1" className="mask mask-star" />
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