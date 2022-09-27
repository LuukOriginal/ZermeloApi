import fetch from "node-fetch";
import { handler } from "../handler";
import { IAnnouncement, IResponse } from "../Interfaces";
import { Announcement } from "./Announcement";

export class AnnouncementsHandler extends handler {
    async get() {
        const reqUrl = `${this.schoolDomain}/announcements?user=~me&current=true&access_token=${this.accessToken}`
        const res = await fetch(reqUrl);
        const json: IResponse<IAnnouncement> = await res.json();
        return json.response.data.map(announcement => new Announcement(announcement)).sort((a, b) => {
        if (a.start === b.start) return 0;
        if (a.start! < b.start!) return -1;
        return 1;
        });
    }
  }