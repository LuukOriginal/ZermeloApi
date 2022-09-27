"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
class Appointment {
    constructor(appointment) {
        this.id = appointment.id;
        this.start = appointment.start;
        this.end = appointment.end;
        this.startTimeSlot = appointment.startTimeSlot;
        this.endTimeSlot = appointment.endTimeSlot;
        this.subjects = appointment.subjects;
        this.teachers = appointment.teachers;
        this.groups = appointment.groups;
        this.locations = appointment.locations;
        this.type = appointment.type;
        this.remark = appointment.remark;
        this.valid = appointment.valid;
        this.cancelled = appointment.cancelled;
        this.modified = appointment.modified;
        this.moved = appointment.moved;
        this.hidden = appointment.hidden;
        this.isNew = appointment.isNew;
        this.changeDescription = appointment.changeDescription;
        this.created = appointment.created;
        this.lastModified = appointment.lastModified;
        this.appointmentInstance = appointment.appointmentInstance;
    }
}
exports.Appointment = Appointment;
