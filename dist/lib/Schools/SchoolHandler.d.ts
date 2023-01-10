import { handler } from "../handler";
import { School } from "./School";
export declare class SchoolHandler extends handler {
    getAll(): Promise<School[]>;
    get(id: string): Promise<School>;
}
