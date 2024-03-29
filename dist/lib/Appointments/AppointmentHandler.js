"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler_1 = require("../handler");
const Appointment_1 = require("./Appointment");
class AppointmentHandler extends handler_1.handler {
    async get(startDate, endDate) {
        const reqUrl = `${this.schoolDomain}/appointments?user=~me&start=${startDate instanceof Date ? startDate.getTime() / 1000 : startDate}&end=${endDate instanceof Date ? endDate.getTime() / 1000 : endDate}&access_token=${this.accessToken}`;
        const res = await (0, node_fetch_1.default)(reqUrl);
        const json = await res.json();
        return json.response.data.map(appointment => new Appointment_1.Appointment(appointment)).sort((a, b) => {
            if (a.start === b.start)
                return 0;
            if (a.start < b.start)
                return -1;
            return 1;
        });
    }
    async getParticipations(year, weeknumber) {
        if (weeknumber <= 52 && weeknumber >= 1) {
            const reqUrl = `${this.schoolDomain}/appointmentparticipations?student=~me&week=${year}${Math.round(weeknumber) < 10 ? `0${Math.round(weeknumber)}` : Math.round(weeknumber)}&fields=id,appointmentInstance,studentInDepartment,optional,studentEnrolled,attendanceParticipationCoordinator,plannedAttendance,realizedAttendance,publicComment,start,end,subjects,teachers,locations,groups,schedulerRemark,changeDescription,startTimeSlotName,endTimeSlotName,allowedStudentActions,availableSpace,cancelled,appointmentType,content&access_token=${this.accessToken}`;
            const res = await (0, node_fetch_1.default)(reqUrl);
            const json = await res.json();
            return json.response.data.map(appointment => new Appointment_1.Appointment(appointment)).sort((a, b) => {
                if (a.start === b.start)
                    return 0;
                if (a.start < b.start)
                    return -1;
                return 1;
            });
        }
        else
            throw "Weeknumber must be between 1-52";
    }
}
exports.AppointmentHandler = AppointmentHandler;
//# sourceMappingURL=AppointmentHandler.js.map