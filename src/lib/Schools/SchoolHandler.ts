import fetch from 'node-fetch';
import { handler } from "../handler";
import { IResponse, ISchool } from "../Interfaces";
import { School } from "./School";

export class SchoolHandler extends handler {

    async getAll() {
        const reqUrl = `${this.schoolDomain}/schools?access_token=${this.accessToken}`
        const res = await fetch(reqUrl);
        const json: IResponse<ISchool> = await res.json();
        return json.response.data.map(school => new School(school));
    }
  
    async get(id: string) {
        const reqUrl = `${this.schoolDomain}/schools/${id}?access_token=${this.accessToken}`
        const res = await fetch(reqUrl);
        const json: IResponse<ISchool> = await res.json();
        return new School(json.response.data[0]);
    }
  }