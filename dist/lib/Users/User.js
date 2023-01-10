"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    firstName;
    lastName;
    code;
    prefix;
    isArchived;
    hasPassword;
    isApplicationManager;
    isStudent;
    isEmployee;
    isFamilyMember;
    isSchoolScheduler;
    isSchoolLeader;
    isStudentAdministrator;
    isTeamLeader;
    isSectionLeader;
    isMentor;
    isDean;
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.code = user.code;
        this.prefix = user.prefix;
        this.isArchived = user.archived;
        this.hasPassword = user.hasPassword;
        this.isApplicationManager = user.isApplicationManager;
        this.isStudent = user.isStudent;
        this.isEmployee = user.isEmployee;
        this.isFamilyMember = user.isFamilyMember;
        this.isSchoolScheduler = user.isSchoolScheduler;
        this.isSchoolLeader = user.isSchoolLeader;
        this.isStudentAdministrator = user.isStudentAdministrator;
        this.isTeamLeader = user.isTeamLeader;
        this.isSectionLeader = user.isSectionLeader;
        this.isMentor = user.isMentor;
        this.isDean = user.isDean;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map