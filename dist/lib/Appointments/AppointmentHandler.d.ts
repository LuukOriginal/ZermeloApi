import { handler } from "../handler";
import { Appointment } from "./Appointment";
export declare class AppointmentHandler extends handler {
    get(startDate: Date | Number, endDate: Date | Number): Promise<Appointment[]>;
    getParticipations(year: number, weeknumber: number): Promise<Appointment[]>;
}
