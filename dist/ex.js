"use strict";
class User {
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
class usersList {
    constructor() {
        this.users = new Array();
    }
    userRegister(user) {
        if (this.users.length == 0) {
            this.users.push(user);
        }
        else {
            for (let i in this.users) {
                if (this.users[i].getCode() == user.getCode()) {
                    alert("Código já cadastrado");
                    registerUser();
                }
                else {
                    this.users.push(user);
                    alert("Usuario Cadastrado!");
                }
            }
        }
    }
    listUsers() {
        if (this.users.length == 0) {
            console.log("Lista vazia");
        }
        console.clear();
        for (let i in this.users) {
            console.log(this.users[i]);
        }
    }
    checkUser(user) {
        for (let i in this.users) {
            if (this.users[i].getCode() === user.getCode()) {
                user.setName(this.users[i].getName());
                console.log("Usuario encontrado");
                return user;
            }
        }
        console.log("Usuario não existe");
        user.setName("");
        user.setCode(0);
        return user;
    }
}
class Message {
    constructor(userTo, userFrom, subject, message) {
        this.userTo = userTo;
        this.userFrom = userFrom;
        this.subject = subject;
        this.message = message;
        this.userFromName = String(this.userFrom.getName());
        this.userToName = String(this.userTo.getName());
        this.userFromCode = Number(this.userFrom.getCode());
        this.userToCode = Number(this.userTo.getCode());
    }
    getUserFromName() {
        return this.userFromName;
    }
    getUserToName() {
        return this.userToName;
    }
    getUserFromCode() {
        return this.userFromCode;
    }
    getUserToCode() {
        return this.userToCode;
    }
    getUserTo() {
        return this.userTo;
    }
    setUserTo(userTo) {
        this.userTo = userTo;
    }
    getUserFrom() {
        return this.userFrom;
    }
    setUserFrom(userFrom) {
        this.userFrom = userFrom;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    getSubject() {
        return this.subject;
    }
    setAssunto(subject) {
        this.subject = subject;
    }
}
class messageList {
    constructor() {
        this.messages = new Array();
    }
    addMessage(msg) {
        this.messages.push(msg);
    }
    showMessage(userCode) {
        let user = userCode.getCode();
        for (let i in this.messages) {
            if (this.messages[i].getUserToCode() == user ||
                this.messages[i].getUserFromCode() == user) {
                console.log(`Mensagens de ${userCode.getName()}:\n Assunto: ${this.messages[i].getSubject()}
                Enviado por: ${this.messages[i].getUserToName()} | Recebida por: ${this.messages[i].getUserFromName()}
                ${this.messages[i].getMessage()}`);
            }
        }
    }
}
