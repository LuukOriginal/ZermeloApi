import { IAppointment } from "../Interfaces";
export declare class Appointment {
    id?: number;
    start?: number;
    end?: number;
    startTimeSlot?: number;
    endTimeSlot?: number;
    subjects?: string[];
    teachers?: string[];
    groups?: string[];
    locations?: string[];
    type?: string;
    remark?: string;
    valid?: boolean;
    cancelled?: boolean;
    modified?: boolean;
    moved?: boolean;
    hidden?: boolean;
    isNew?: any;
    changeDescription?: string;
    created?: number;
    lastModified?: number;
    appointmentInstance?: number;
    constructor(appointment: IAppointment);
}
