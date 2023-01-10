import { handler } from "../handler";
import { Announcement } from "./Announcement";
export declare class AnnouncementsHandler extends handler {
    get(): Promise<Announcement[]>;
}
