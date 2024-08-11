import carousel1 from "../assets/c1.png";
import carousel2 from "../assets/c2.png";
import carousel3 from "../assets/c3.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HeroSection = () => {
    return (
        <section className='h-full w-full flex flex-col '>
            <Slider autoplay adaptiveHeight >
                {/* <Carousel theme={{
                root: {
                    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none bg-opacity-50",
                    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
                },

            }} slideInterval={5000} indicators={false} pauseOnHover> */}
                <img src={carousel1} alt="..." />
                <img src={carousel2} alt="..." />
                <img src={carousel3} alt="..." />
            </Slider>

            <Link to="/book" className=" absolute bottom-14 right-14 border  border-amber-600 text-amber-600 py-2 px-4 rounded-md hover:shadow-xl transition-all duration-200 shadow-amber-600">
                Book an Appointment
            </Link>
            {/* <button className="absolute bottom-14 right-14" color="gold-7"  >Book Appointment</button> */}
            {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            </div> */}
        </section>
    );
};

export default HeroSection;
