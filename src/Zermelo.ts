import { ZermeloApiOptions } from "./Types/Zermelo"

class Zermelo {
    SchoolDomain : string
    AuthCode? : string
    AuthToken? : string

    constructor (Options : ZermeloApiOptions) {
        this.SchoolDomain = Options.SchoolDomain
        this.AuthCode = Options.AuthCode
        this.AuthToken = Options.AuthToken
    }
}

export default Zermelo