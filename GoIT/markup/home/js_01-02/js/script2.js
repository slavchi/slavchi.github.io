function main(){
		var numberOfPeople = 5;
		var arrayHumans = [];
		var user;
		var presence = false;
		for(var i = 1; i < numberOfPeople+1; ++i)
			arrayHumans[i] = prompt('Введите имя '+i+'-го человека');
		user = prompt('Введите имя пользователя');
		for(var i = 0; i < numberOfPeople; ++i)
			if(arrayHumans[i] === user)
				presence = true;
		presence ? alert(user + ", вы успешно вошли") : alert("Такого имени нет!");
		return 0;
	}
	main();
