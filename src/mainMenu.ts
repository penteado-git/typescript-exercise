//import {usersList} from "./dist/class/usersList"
//import  {messageList}  from "./dist/class/messageList.js";
//import  {Message}  from "./dist/class/messageClass.js";
//import  {User}  from "./dist/class/user.js";

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
