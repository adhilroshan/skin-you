export interface Appointment {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    date: string;
    time: string;
    service: string;
    concern: string;
}

export interface AppointmentFormData {
    name: string;
    email: string;
    phoneNumber: string;
    date: string;
    time: string;
    service: string;
    concern: string;
}
