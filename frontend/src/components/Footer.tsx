
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className="flex flex-col text-black font-bold -mt-5">
            <div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon className='h-5' icon={faMapMarkerAlt} />
                    <div>

                        115 B Mittal Court,<br />
                        Nariman Point, Mumbai 400 021
                    </div>
                </div>
                <div className="flex gap-2">
                    <FontAwesomeIcon icon={faPhoneAlt} /> +91 222284 30001 | +9122 2282 55 55
                </div>
            </div>
            <div className="flex gap-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>

            <div className="container mx-auto text-center">
                {/* <p>&copy; 2024 Appointment Booking System. All rights reserved.</p> */}
            </div>
        </footer>
    );
}

export default Footer;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

// function Footer() {
//     return (
//         <footer className="flex flex-col text-black">
//             <div>
//                 <div className="block">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} /> 115 B Mittal Court,<br />
//                     Nariman Point, Mumbai 400 021
//                 </div>
//                 <div className="block">
//                     <FontAwesomeIcon icon={faPhoneAlt} /> +91 222284 30001 +9122 2282 55 55
//                 </div>
//             </div>
//             <div className="container mx-auto text-center">
//                 {/* <p>&copy; 2024 Appointment Booking System. All rights reserved.</p> */}
//             </div>
//         </footer>
//     );
// }


// export default Footer;
