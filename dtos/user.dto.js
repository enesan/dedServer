class UserDto {
    constructor(login, password, name, group) {
        this._name = name;
        this._group = group;
        this._login = login;
        this._password = password;
    }

    setUser(login, password, name, group) {
        return {
            login: login,
            password: password,
            name: name,
            group: group
        }
    }
}

module.exports.UserDto = UserDto;