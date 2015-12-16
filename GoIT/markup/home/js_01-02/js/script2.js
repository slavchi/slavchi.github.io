var enterNames = [];

for (var i = 1; i < 3; i++) {	
	enterNames[i] = prompt('Введите имя '+i+'-го человека');
		
}



var login = prompt('Введите имя пользователя: ');
var result = findName(enterNames, login);

if (!result) {
  alert('Пользователь не найден!');
} else {
  alert(login + ', вы успешно вошли');
} 

function findName(enterNames, name) {
  for (var i = enterNames.length - 1; i >= 0; i--) {
    if (enterNames[i] == name) {
      return name;
    } else {
      return null;
    }
  }
}
