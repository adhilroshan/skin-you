import carousel1 from "../assets/c1.png";
import carousel2 from "../assets/c2.png";
import carousel3 from "../assets/c3.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "./Carousal";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const HeroSection = () => {
    const images = [carousel1, carousel2, carousel3];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='w-full flex flex-col '>
            <Carousel
                // swipeable={false}
                // draggable={false}
                showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="max-h-full w-full rounded-lg"
            >
                {images.map((image, index) => (
                    <div className="relative aspect-video lg:aspect-[2.5]">

                        <img className="absolute h-full w-full asp object-cover" src={image} key={index} alt="..." />
                    </div>
                ))}
            </Carousel>

            <Link to="/book" className=" absolute bottom-14 right-14 border-2 font-bold rounded-full  border-amber-600 text-amber-600 py-2 px-4  hover:shadow-xl transition-all duration-200 shadow-amber-600">
                Book an Appointment
            </Link>
        </section>
    );
};

export default HeroSection;
