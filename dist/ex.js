"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
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
    } else {
      for (let i in this.users) {
        if (this.users[i].getCode() == user.getCode()) {
          alert("Código já cadastrado");
        } else {
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
      if (
        this.messages[i].getUserToCode() == user ||
        this.messages[i].getUserFromCode() == user
      ) {
        console.log(`Mensagens de ${userCode.getName()}:\n Assunto: ${this.messages[
          i
        ].getSubject()}
                Enviado por: ${this.messages[
                  i
                ].getUserToName()} | Recebida por: ${this.messages[
          i
        ].getUserFromName()}
                ${this.messages[i].getMessage()}`);
      }
    }
  }
}
var listMessages = new messageList();
var listaUsuarios = new usersList();
function sendMessage() {
  let messageSubject = "";
  var messageText = "";
  let userFrom = "";
  let userTo = "";
  let menuFrom = new User();
  let menuTo = new User();
  let typeOf = "";
  while (userFrom == "" || userFrom == null) {
    listaUsuarios.listUsers();
    userFrom = prompt("Escolha um código de usuário remetente");
    menuFrom.setCode(Number(userFrom));
    menuFrom.setName("");
    menuFrom = listaUsuarios.checkUser(menuFrom);
    if (menuFrom.getCode() == 0) {
      alert("Usuario não existe");
      userFrom = "";
    }
    userFrom = menuFrom.getName();
  }
  while (userTo == "" || userTo == null) {
    listaUsuarios.listUsers();
    userTo = prompt("Escolha um código de usuário destinatário");
    menuTo.setCode(Number(userTo));
    menuTo.setName("");
    menuTo = listaUsuarios.checkUser(menuTo);
    if (menuTo.getCode() == 0) {
      alert("usuario não existe");
      userTo = "";
    }
    userTo = menuTo.getName();
  }
  if (menuFrom.getCode() == menuTo.getCode()) {
    alert("Remetente e Destinatário iguais");
    sendMessage();
  }
  while (typeOf == "" || typeOf == null) {
    typeOf = prompt("Deseja enviar uma mensagem apimentada?", "S/N");
  }
  if (typeOf == "S") {
    function getAPIMessage(message) {
      return __awaiter(this, void 0, void 0, function* () {
        let url = `https://foaas.com${message}`;
        let response = yield fetch(url, {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        var data = yield response.json();
        data = data.message;
        localStorage.setItem("msg", data);
      });
    }
    getAPIMessage("/asshole/:from");
    messageText = localStorage.getItem("msg");
  } else {
    while (messageSubject == "" || messageSubject == null) {
      messageSubject = prompt("Digite um Assunto");
    }
    while (messageText == "" || messageText == null) {
      messageText = prompt("Digite uma mensagem");
    }
  }
  let message = new Message(menuFrom, menuTo, messageSubject, messageText);
  listMessages.addMessage(message);
}
function registerUser() {
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
function seeHistory() {
  let userMessage = "";
  let user = new User();
  listaUsuarios.listUsers();
  while (userMessage == "" || userMessage == null) {
    userMessage = prompt(
      "Escolha de qual usuário deseja ver o histórico de mensagem"
    );
  }
  user.setCode(Number(userMessage));
  user.setName("");
  user = listaUsuarios.checkUser(user);
  listMessages.showMessage(user);
}
function mainMenu() {
  var variable = prompt(
    "1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair"
  );
  if (variable == null) {
    return 4;
  }
  return Number(variable);
}
var choose = mainMenu();
do {
  switch (choose) {
    case 1:
      registerUser();
      choose = mainMenu();
      break;
    case 2:
      sendMessage();
      choose = mainMenu();
      break;
    case 3:
      seeHistory();
      choose = mainMenu();
      break;
    case 4:
      break;
    default:
      mainMenu();
      break;
  }
} while (choose != 4);
class listAPiMessages {
  //incializa a lista com alguns urls da API
  constructor(userTo) {
    this.messagesAPI = new Array();
    this.messagesAPI.push(`/bday/${userTo}/:from`);
    this.messagesAPI.push(`/blackadder/${userTo}/:from`);
    this.messagesAPI.push(`/dalton/${userTo}/:from`);
    this.messagesAPI.push(`/donut/${userTo}/:from`);
    this.messagesAPI.push(`/bday/${userTo}/:from`);
    this.messagesAPI.push(`/equity/${userTo}/:from`);
    this.messagesAPI.push(`/cocksplat/${userTo}/:from`);
    this.messagesAPI.push(`/deraadt/${userTo}/:from`);
    this.messagesAPI.push(`/fewer/${userTo}/:from`);
    this.messagesAPI.push(`/fts/${userTo}/:from`);
    this.messagesAPI.push(`/fewer/${userTo}/:from`);
    this.messagesAPI.push(`/keep/${userTo}/:from`);
    this.messagesAPI.push(`/linus/${userTo}/:from`);
  }
  //sorteia um numero da lista e retorna o url da posição sorteada
  sortMessage() {
    const random = Number(Math.floor(Math.random() * this.messagesAPI.length));
    return this.messagesAPI[random];
  }
}
