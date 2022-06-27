import { messageList } from "./messageList";
import { listMessages } from "./message";
import { listaUsuarios } from "./message";

export class User {
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

export function registerUser() {
  const user = new User();
  let userName: string | null = "";
  let userCode: string | null = "";

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
