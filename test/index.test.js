const {Zermelo} = require("../build");
const accessToken = "m8aqq9r507u9chu46n50bflo34";

(async () => {
    // const accessToken = await Zermelo.getAccessToken("sgdelangstraat", "250 265 977 314");
    const Api = new Zermelo("sgdelangstraat", accessToken)
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