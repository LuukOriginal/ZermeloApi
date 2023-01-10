import { IAnnouncement } from "../Interfaces";
export declare class Announcement {
    id: number | undefined;
    start: number | undefined;
    end: number | undefined;
    title: string | undefined;
    text: string | undefined;
    constructor(announcement: IAnnouncement);
}
