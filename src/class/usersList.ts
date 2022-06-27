import { User } from "./user";

export class usersList {
  private users = new Array<User>();

  userRegister(user: User) {
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
