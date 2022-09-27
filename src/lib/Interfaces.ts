export interface ITokenResponse {
    access_token: string,
    token_type: string,
    expires_in: number
}

export interface IUser {
    code: string;
    roles: any[];
    firstName: string;
    prefix: string;
    lastName: string;
    schoolInSchoolYears: number[];
    isApplicationManager: boolean;
    archived: boolean;
    isStudent: boolean;
    isEmployee: boolean;
    isFamilyMember: boolean;
    hasPassword: boolean;
    isSchoolScheduler: boolean;
    isSchoolLeader: boolean;
    isStudentAdministrator: boolean;
    isTeamLeader: boolean;
    isSectionLeader: boolean;
    isMentor: boolean;
    isParentTeacherNightScheduler: boolean;
    isDean: boolean;
}

export interface IResponse<A> {
    response: {
        status: number,
        message: string,
        details: string,
        eventId: number,
        startRow: number,
        endRow: number,
        totalRows: number,
        data: A[]
    }
}

export interface ISchool {
    id?: number,
    name?: string,
    defaultStudentRole?: any,
    defaultEmployeeRole?: any,
    defaultFamilyMemberRole?: any,
    brin?: string,
    region?: string,
    defaultStudentRoleName?: string,
    defaultEmployeeRoleName?: string,
    defaultFamilyMemberRoleName?: string
}

export interface IAppointment {
    isNew?: any,
    id?: number,
    appointmentInstance?: number,
    start?: number,
    end?: number,
    startTimeSlot?: number,
    endTimeSlot?: number,
    subjects?: string[],
    type?: "unknown" | "lesson" | "exam" | "activity" | "choice" | "talk" | "other",
    remark?: string,
    locations?: string[],
    teachers?: string[],
    students?: string[],
    groups?: string[],
    created?: number,
    lastModified?: number,
    valid?: boolean,
    hidden?: boolean,
    cancelled?: boolean,
    modified?: boolean,
    moved?: boolean,
    new?: boolean,
    changeDescription?: string
}

export interface IAnnouncement {
    id?: number,
    start?: number,
    end?: number,
    title?: string,
    text?: string,
    branchesOfSchools?: number[]
}