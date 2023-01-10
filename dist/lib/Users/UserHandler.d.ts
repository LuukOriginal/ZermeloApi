import { handler } from "../handler";
import { User } from "./User";
export declare class UserHandler extends handler {
    get(): Promise<User>;
}
