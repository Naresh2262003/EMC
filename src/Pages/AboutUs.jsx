import aboutMainImage from "../Assets/Images/aboutMainImage.png";  // Update image to reflect design services
import CarouselSlide from "../Compontents/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData"; // You might want to update this data if it's not related
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

    return (
        <HomeLayout>
            <div className="lg:pl-20 pt-20 flex flex-col text-white min-h-[90vh]">
                <div className="flex flex-col lg:flex-row items-center gap-5 mx-10">
                    <section className="lg:w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Stunning Designs for Every Occasion
                        </h1>
                        <p className="text-xl text-gray-200">
                            We are passionate about creating beautiful and effective designs for posters, YouTube thumbnails, and more. 
                            Our mission is to help businesses, influencers, and creatives stand out with custom designs that capture attention and leave a lasting impression.
                        </p>
                    </section>
                    <div className="lg:w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}  // You may want to update this image for more design-related visuals
                        />
                    </div>
                </div>

                <div className="w-[80vw] carousel lg:w-1/2 m-auto my-16">
                    {celebrities && celebrities.map(celebrity => (
                        <CarouselSlide
                            {...celebrity}
                            key={celebrity.slideNumber}
                            totalSlides={celebrities.length}
                        />
                    ))}
                </div>
            </div>
        </HomeLayout>
    )
}
export default AboutUs;
