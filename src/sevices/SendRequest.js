import Api from './Api'

export default {
    register(credentials) {
        return Api.get('api/register', credentials)
    }
}