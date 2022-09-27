import fetch from "node-fetch";
import { handler } from "../handler";
import { IResponse, IUser } from "../Interfaces";
import { User } from "./User";

export class UserHandler extends handler {
    async get() {
        const reqUrl = `${this.schoolDomain}/users/~me?access_token=${this.accessToken}`
        const res = await fetch(reqUrl);
        const json: IResponse<IUser> = await res.json();
        return new User(json.response.data[0]);
    }
}