export default class ValidateService{
    static validateTheme(theme){
        return Array.isArray(theme) && theme.length > 0
    }

}