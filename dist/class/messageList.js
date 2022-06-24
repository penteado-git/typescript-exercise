import { User } from "./user";
import { usersList } from "./usersList";
export class messageList {
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
var listMessages = new messageList();
var listaUsuarios = new usersList();
export function seeHistory() {
    let userMessage = "";
    let user = new User();
    listaUsuarios.listUsers();
    while (userMessage == "" || userMessage == null) {
        userMessage = prompt("Escolha de qual usuário deseja ver o histórico de mensagem");
    }
    user.setCode(Number(userMessage));
    user.setName("");
    user = listaUsuarios.checkUser(user);
    listMessages.showMessage(user);
}
