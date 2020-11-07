import { ADMIN_USERNAME, ADMIN_PASSWORD } from '../Constants/admin'

export default function isAuthenticate(user) {

    if ((user.username === ADMIN_USERNAME) &&
        (user.password === ADMIN_PASSWORD)){
            return true
        }else{
            return false
        }
}
