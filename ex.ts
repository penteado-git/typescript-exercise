import { sendMessage } from "./ex"
import { registerUser } from "./ex"
import { seeHistory } from "./ex"
import { mainMenu } from "./ex"

class User {
  private name: string | null = "";
  private code: number = 0;

  public getName() {
    return this.name;
  }

  public setName(name: string | null) {
    this.name = name;
  }

  public getCode() {
    return this.code;
  }

  public setCode(code: number) {
    this.code = code;
  }
}

class usersList {
  private users = new Array<User>();

  userRegister(user: User) {
    if (this.users.length == 0) {
      this.users.push(user);
    } else {
      for (let i in this.users) {
        if (this.users[i].getCode() == user.getCode()) {
          alert("Código já cadastrado");
          registerUser();
        } else {
          this.users.push(user);
          alert("Usuario Cadastrado!");
        }
      }
    }
  }

  listUsers(): void {
    if (this.users.length == 0) {
      console.log("Lista vazia");
    }
    console.clear();
    for (let i in this.users) {
      console.log(this.users[i]);
    }
  }

  checkUser(user: User): User {
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

class messageList {
  private messages = new Array<Message>();

  addMessage(msg: Message): void {
    this.messages.push(msg);
  }

  showMessage(userCode: User) {
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
