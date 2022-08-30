import ValidateUser from "../services/ValidateUser.js";

/*Validacao Positiva nome*/
test("Validar se o nome tem 3 caracteres ou mais.", () => {
    expect(ValidateUser.validateName("Rui")).toBe(true);
});

/*Validacao Negativa nome*/
test("Validar se o nome tem 3 caracteres ou mais.", () => {
    expect(ValidateUser.validateName("Bo")).toBe(false);
});

/*Validacao Positiva login*/
test("Validar se o login tem 3 caracteres ou mais.", () => {
    expect(ValidateUser.validateLogin("Rui")).toBe(true);
});

/*Validacao Negativa login*/
test("Validar se o login tem 3 caracteres ou mais.", () => {
    expect(ValidateUser.validateLogin("Bo")).toBe(false);
});

/*Validacao Positiva tolken*/
test("Validar se o tolken tem 3 caracteres ou mais.", () => {
    expect(ValidateUser.validateTolken("010")).toBe(true);
});

/*Validacao Negativa tolken*/
test("Validar se o tolken tem 3 caracteres ou mais.", () => {
    expect(ValidateUser.validateTolken("01")).toBe(false);
});

/* Validação Positiva Temas */
test("Validar se o tema é um Array e tem algum item dentro", () => {
    expect(ValidateUser.validateTheme(["oi"])).toBe(true);
});

/* Validação Negativa Temas */
test("Validar se o tema é um Array e tem algum item dentro", () => {
    expect(ValidateUser.validateTheme("oi")).toBe(false);
});

test("Validar se o tema é um Array e tem algum item dentro", () => {
    expect(ValidateUser.validateTheme([])).toBe(false);
});

/* Validação Positiva Chaves da requisição */
test("Validar se as chaves do corpo da Requisição estão corretas", () => {
    expect(ValidateUser.validateKeys("nome","login", "tolken", "temas")).toBe(true);
});


/* Validação Negativa Chaves da requisição */
test("Validar se as chaves do corpo da Requisição estão corretas", () => {
    expect(ValidateUser.validateKeys("nome","login", "tolken", "tema")).toBe(false);
});

/* Validação positiva do isValid */
test("Validar se a função isValid que contém todas as validações informadas anteriormente estão corretas.", () => {
    expect(ValidateUser.isValid("Rui", "Rui", "0101",["oi"], ["nome", "login", "tolken", "temas"])).toBe(true);
});

/* Validação do isValid */
test("Validar se a função isValid que contém todas as validações informadas anteriormente estão corretas.", () => {
    expect(ValidateUser.isValid("Bo", "Rui", "0101", ["oi"], ["nome","login", "tolken", "temas"])).toBe(false);
});

test("Validar se a função isValid que contém todas as validações informadas anteriormente estão corretas.", () => {
    expect(ValidateUser.isValid("Rui", "Bo", "0101",  ["oi"], ["nome","login", "tolken", "temas"])).toBe(false);
});

test("Validar se a função isValid que contém todas as validações informadas anteriormente estão corretas.", () => {
    expect(ValidateUser.isValid("Rui", "Rui", "01" , ["oi"], ["nome","login", "tolken", "temas"])).toBe(false);
});

test("Validar se a função isValid que contém todas as validações informadas anteriormente estão corretas.", () => {
    expect(ValidateUser.isValid("Rui", "Rui", "0101", [],["nome","login", "tolken", "temas"])).toBe(false);
});

test("Validar se a função isValid que contém todas as validações informadas anteriormente estão corretas.", () => {
    expect(ValidateUser.isValid("Rui", "Rui", "0101", ["oi"],["nome","login", "tolken", "tema"])).toBe(false);
});
