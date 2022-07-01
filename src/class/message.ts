import { User } from "./user";
import { messageList } from "./messageList";
import { usersList } from "./usersList";

export class Message {
  private userFrom: User | string | null = "";
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

  setSubjetc(subject: string) {
    this.subject = subject;
  }
}



export var listMessages = new messageList();
export var listaUsuarios = new usersList();
