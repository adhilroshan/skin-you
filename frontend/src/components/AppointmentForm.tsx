
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookAppointment } from '../api';
import { AppointmentFormData } from '../types';

const services = [
    "Bridal Package Treatment",
    "Gel Peels / Chemical Peels Treatment",
    "Caci Treatment",
    "Skin Polishing (Microdermabrasion)",
    "Oxygen Facial Treatment",
    "Whitening Facial Treatment",
    "Tightening Facial Treatment",
    "Clean Up Treatment (Pore Cleansing)",
    "Oxygen Treatment",
    "Hydration Facial Treatment",
    "Glutathione Whitening Treatment",
    "Cosmelan Depigmentation Treatment",
    "Low Level Light Laser for Hair Loss",
    "Botox Treatment",
    "Dermal Filler Treatment",
    "Clear Lift Photo Facial",
    "Pore Tighting Treatment",
    "Derma Roller Treatment",
    "Mesotheraphy Treatment",
    "Placenta Extract Treatment",
    "Prp Vampire Facelift",
    "Liquid Facelift Treatment",
    "Stretch Marks Treatment",
    "Non Surgical Skin Tightening",
    "Hair Loss Treatment",
    "Semi Permanent Make Up",
    "Medical Tattooing",
    "Painless Laser Hair Removal",
    "Ndyag/ Hair Removal Treatment",
    "Accent Ultra Skin Body Contouring",
    "Accent Ultra RF Pixel",
    "RF Growth Removal",
    "Harmony XL Birth Mark Removal",
    "Harmony XL Spider Vein Removal",
    "PRP for Hair Loss Treatment",
    "Stem Cells for Hair Loss",
    "Painless Tattoo Removal",
    "Body Slimming Treatment",
    "Skin Problem",
    "Acne",
    "Acne Scars",
    "Rosacea / Pink Face",
    "Eczema",
    "Allergy / Itching",
    "Warts / Corns",
    "Unwanted Skin Growths",
    "Keloid / Hypertrophic Scars",
    "Dry Skin / Xerosis",
    "Bacterial Infection",
    "Fungal Infection",
    "Viral Infection",
    "Skin Problem",
    "Candid Infection",
    "Psoriasis",
    "Lichen Planus",
    "Vitiligo / White Patches",
    "Xanthelasma Palpebrarum",
    "Pigmentation (Melasma / Freckles)",
    "Burns",
    "Lice & Bites",
    "Drug Reaction",
    "Mouth Ulcers",
    "Excessive Sweating",
    "Seborrheic Dermatitis",
    "Nail Problem",
    "Nail Infections",
    "Nail Changes",
    "Splitting / Peeling / Brittle Nails",
    "Hair Problem",
    "Patchy Hair Loss / Alopecia Areata",
    "Hair Loss",
    "Dandruff",
    "Excess Hair",
    "Hair Infection"
];

const AppointmentForm: React.FC = () => {
    const [formData, setFormData] = useState<AppointmentFormData>({
        name: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        service: '',
        concern: ''
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await bookAppointment(formData);
            navigate('/appointments');
        } catch (error) {
            console.error('Error booking appointment:', error);
        }
    };

    return (
        <div className="container mx-auto max-w-2xl p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Appointment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                    <input type="email" name="email" value={formData.email} placeholder='Email' onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                    <input type="text" name="phoneNumber" placeholder='Phone' value={formData.phoneNumber} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                    {/* <label htmlFor="date">Date :</label> */}
                    <input type="date" name="date" placeholder='Date' value={formData.date} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                    <select name="service" value={formData.service} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <option value="" disabled>Select a service</option>
                        {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <textarea name="concern" placeholder='Concern' value={formData.concern} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors">
                    Book Appointment
                </button>
            </form>
        </div>
    );
}

export default AppointmentForm;
