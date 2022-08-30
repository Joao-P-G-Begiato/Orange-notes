import ValidateService from "./service.js";

export default class ValidateUser extends ValidateService{
    static validateName(name){
        return this.validateText(name)
    }

    static validateLogin(login){
        return this.validateText(login)
    }

    static validateTolken(tolken){
        return this.validateText(tolken)
    }

    static validateTheme(theme){
        return this.validateArray(theme)
    }

    static validateUserKeys(keys){
        return this.validateKeys(...keys)
    }

    static isValid(name, login, tolken, theme, keys){
        return (
            this.validateName(name) &&
            this.validateLogin(login) &&
            this.validateTolken(tolken) &&
            this.validateTheme(theme) &&
            this.validateUserKeys(keys)
        )
    }
}