Node.prototype.execFor = function (test, callback) {
	var stack = [].slice.call(this.childNodes);
	while (stack.length != 0) {
		var current = stack.pop();
		for (var i = 0; i < current.childNodes.length; ++i) stack.push(current.childNodes[i]);
		if (test(current)) callback(current);
	}
};

Node.prototype.execForAll = function (callback) {
	this.execFor(function (){ return true; }, callback);
};

document.execFor(
	function (node) { return node.nodeType == 3; },
	function (node) {
		node.textContent = node.textContent.replace(/Sign in/g, 'Войти');
		node.textContent = node.textContent.replace(/Sign up/g, 'Регистрация');
		node.textContent = node.textContent.replace(/Войти to GitHub/g, 'Войти в GitHub');
		node.textContent = node.textContent.replace(/Username or email address/g, 'Имя пользователя или адрес электронной почты');
		node.textContent = node.textContent.replace(/Password/g, 'Пароль');
		node.textContent = node.textContent.replace(/Signing in…/g, 'Войти');
		node.textContent = node.textContent.replace(/New to GitHub?/g, 'Впервые на GitHub');
		node.textContent = node.textContent.replace(/Forgot password?/g, 'Забыл пароль');
		node.textContent = node.textContent.replace(/Create an account/g, 'Завести аккаунт');
		node.textContent = node.textContent.replace(/New/g, 'Новый');
		node.textContent = node.textContent.replace(/Repositories/g, 'Репозитории');
		node.textContent = node.textContent.replace(/Create an organization/g, 'Создать организацию');
node.textContent = node.textContent.replace(/Star/g, 'Звезда');
//профиль кнопка
		node.textContent = node.textContent.replace(/Signed in as/g, 'Вы вошли как');
		node.textContent = node.textContent.replace(/Your profile/g, 'Твой профиль');
		node.textContent = node.textContent.replace(/Your repositories/g, 'Твой репозиторий');
		node.textContent = node.textContent.replace(/Your projects/g, 'Твои проекты');
		node.textContent = node.textContent.replace(/Your stars/g, 'Твои звезды');
		node.textContent = node.textContent.replace(/Your gists/g, 'Твоя суть');
		node.textContent = node.textContent.replace(/Upgrade/g, 'Обновление');
		node.textContent = node.textContent.replace(/Help/g, 'Помощь');
//проек
		node.textContent = node.textContent.replace(/Code/g, 'Код');
		node.textContent = node.textContent.replace(/Issues/g, 'Вопросы');
		node.textContent = node.textContent.replace(/Pull requests/g, 'Запросы на вытягивание');
		node.textContent = node.textContent.replace(/Actions/g, 'Действия');
		node.textContent = node.textContent.replace(/Projects/g, 'Проекты');
		node.textContent = node.textContent.replace(/Wiki/g, 'Вики');
		node.textContent = node.textContent.replace(/Security/g, 'Безопасность');
		node.textContent = node.textContent.replace(/Settings/g, 'Настройки');
    }
);