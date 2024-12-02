import { Link } from "react-router-dom";

import homeimg from '../Assets/Images/homePageMainImage.png';  // You might want to change the image if it's not related to your design services
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center mx-5 gap-10 lg:mx-16 h-[50rem] sm:h-[90vh]">
                <div className="mt-16 sm:mt-0 flex flex-col justify-center md:w-1/2 space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-semibold">
                        Create Stunning Designs for Your Brand
                        <span className="text-yellow-500 font-bold">
                            Posters & YouTube Thumbnails
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200">
                        Here, we specialize in crafting unique, attention-grabbing posters and YouTube thumbnails that help you stand out. Whether it's for a new product launch or a fresh YouTube video, we've got you covered.
                    </p>
                    <div className="space-x-6">
                        <Link to="/services">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore Our Designs
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img src={homeimg} alt="homepage design" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
