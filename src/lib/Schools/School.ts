import { ISchool } from "../Interfaces";

export class School {
  public id?: number;
  public name?: string;
  public region?: string;
  
  constructor(school: ISchool) {
    this.id = school.id;
    this.name = school.name;
    this.region = school.region;
  }
}