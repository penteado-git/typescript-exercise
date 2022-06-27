import { User } from "./user";
import { messageList } from "./messageList";
import { usersList } from "./usersList";

export class Message {
  private userFrom: User;
  private userFromName: string;
  private userTo: User;
  private userToName: string;
  private subject: string | null;
  private message: string | null;
  private userFromCode: number;
  private userToCode: number;

  constructor(
    userTo: User,
    userFrom: User,
    subject: string | null,
    message: string | null
  ) {
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

  setUserTo(userTo: User) {
    this.userTo = userTo;
  }

  getUserFrom() {
    return this.userFrom;
  }

  setUserFrom(userFrom: User) {
    this.userFrom = userFrom;
  }

  getMessage() {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }

  getSubject() {
    return this.subject;
  }

  setAssunto(subject: string) {
    this.subject = subject;
  }
}

export function sendMessage() {
  let messageSubject: string | null = "";
  var messageText: string | null = "";
  let userFrom: string | null = "";
  let userTo: string | null = "";
  let menuFrom = new User();
  let menuTo = new User();
  let typeOf: string | null = "";

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
    async function getAPIMessage(message: string) {
      let url = `https://foaas.com${message}`;
      let response = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      var data = await response.json();
      data = data.message;

      localStorage.setItem("msg", data);
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

export var listMessages = new messageList();
export var listaUsuarios = new usersList();
