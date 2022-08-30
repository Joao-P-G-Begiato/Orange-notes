export default class ValidateService{
    static validateArray(theme){
        return Array.isArray(theme) && theme.length > 0
    }

    static validateKeys(nome, login, tolken, temas){
        return nome == "nome" && login == "login" && tolken == "tolken" &&  temas == "temas"
    }

    static validateText(text){
        return text.length >= 3
    }
}