import { listaUsuarios } from "./message";
export class User {
    constructor() {
        this.name = "";
        this.code = 0;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
}
export function registerUser() {
    const user = new User();
    let userName = "";
    let userCode = "";
    while (userName == "" || userName == null) {
        userName = prompt("Digite o nome");
    }
    while (userCode == "" || userCode == null) {
        userCode = prompt("Digite um código");
    }
    user.setCode(Number(userCode));
    user.setName(userName);
    listaUsuarios.userRegister(user);
    listaUsuarios.listUsers();
}
