import fetch from "node-fetch";
import { handler } from "../handler";
import { IAppointment, IResponse } from "../Interfaces";
import { Appointment } from "./Appointment";

export class AppointmentHandler extends handler {
    async get(startDate: Date | Number, endDate: Date | Number) {
        const reqUrl = `${this.schoolDomain}/appointments?user=~me&start=${startDate instanceof Date ? startDate.getTime() / 1000 : startDate}&end=${endDate instanceof Date ? endDate.getTime() / 1000 : endDate}&access_token=${this.accessToken}`
        const res = await fetch(reqUrl);
        const json: IResponse<IAppointment> = await res.json();
        return json.response.data.map(appointment => new Appointment(appointment)).sort((a, b) => {
            if (a.start === b.start) return 0;
            if (a.start! < b.start!) return -1;
            return 1;
        });
    }
    
    async getParticipations(year: number, weeknumber: number) {
        if (weeknumber <= 52 && weeknumber >= 1) {
            const reqUrl = `${this.schoolDomain}/appointmentparticipations?student=~me&week=${year}${Math.round(weeknumber) < 10 ? `0${Math.round(weeknumber)}` : Math.round(weeknumber)}&fields=id,appointmentInstance,studentInDepartment,optional,studentEnrolled,attendanceParticipationCoordinator,plannedAttendance,realizedAttendance,publicComment,start,end,subjects,teachers,locations,groups,schedulerRemark,changeDescription,startTimeSlotName,endTimeSlotName,allowedStudentActions,availableSpace,cancelled,appointmentType,content&access_token=${this.accessToken}`
            const res = await fetch(reqUrl);
            const json: IResponse<IAppointment> = await res.json();
            return json.response.data.map(appointment => new Appointment(appointment)).sort((a, b) => {
                if (a.start === b.start) return 0;
                if (a.start! < b.start!) return -1;
                return 1;
            });
        } else throw "Weeknumber must be between 1-52";
    }
}