const {Zermelo} = require("../build");

(async () => {
    const accessToken = await Zermelo.getAccessToken("schoolname", "code here");
    const Api = new Zermelo("schoolname", accessToken)
    console.log("test", Api)

    const Users = await Api.Users.get()
    console.log(`Hello ${Users.firstName} ${Users.prefix} ${Users.lastName}!`)

    const Appointments = await Api.Appointments.getParticipations(2022, 39)
    console.log(Appointments)

    const Schools = await Api.Schools.getAll()
    console.log(Schools)

    const Announcements = await Api.Announcements.get()
    console.log(Announcements)
})();