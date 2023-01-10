import { IUser } from "../Interfaces";
export declare class User {
    firstName: string | undefined;
    lastName: string | undefined;
    code: string | undefined;
    prefix: string | undefined;
    isArchived: boolean | undefined;
    hasPassword: boolean | undefined;
    isApplicationManager: boolean | undefined;
    isStudent: boolean | undefined;
    isEmployee: boolean | undefined;
    isFamilyMember: boolean | undefined;
    isSchoolScheduler: boolean | undefined;
    isSchoolLeader: boolean | undefined;
    isStudentAdministrator: boolean | undefined;
    isTeamLeader: boolean | undefined;
    isSectionLeader: boolean | undefined;
    isMentor: boolean | undefined;
    isDean: boolean | undefined;
    constructor(user: IUser);
}
