export function sendMessage() {
    let messageSubject = "";
    var messageText = "";
    let userFrom = "";
    let userTo = "";
    let menuFrom = new User();
    let menuTo = new User();
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
    while (messageSubject == "" || messageSubject == null) {
        messageSubject = prompt("Digite um Assunto");
    }
    while (messageText == "" || messageText == null) {
        messageText = prompt("Digite uma mensagem");
    }
    let message = new Message(menuFrom, menuTo, messageSubject, messageText);
    listMessages.addMessage(message);
}
var listMessages = new messageList();
var listaUsuarios = new usersList();
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
export function mainMenu() {
    var variable = prompt("1 - Cadastrar Usuário\n2 - Enviar Mensagem\n3 - Ver histórico de mensagens\n4 - Sair");
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
