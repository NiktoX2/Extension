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
//верх
		node.textContent = node.textContent.replace(/News/g, 'Новости');
//вверх кнопка на профиль 
		node.textContent = node.textContent.replace(/My Profile/g, 'Мой профиль');
		node.textContent = node.textContent.replace(/Messages/g, 'Сообщения');
		node.textContent = node.textContent.replace(/Reward Store/g, 'Магазин наград');
		node.textContent = node.textContent.replace(/Settings/g, 'Настройки');
//подвал
		node.textContent = node.textContent.replace(/Products/g, 'Товары');

//главная
//большая фигня с добро пожаловать
		node.textContent = node.textContent.replace(/Welcome to/g, 'Добро пожаловать на переведенный сайт');
		node.textContent = node.textContent.replace(/Can't find what you're looking for?/g, 'Не можете найти то, что ищете');
		node.textContent = node.textContent.replace(/Start a project/g, 'Начать проект');
//Избранные игры верхняя страка
		node.textContent = node.textContent.replace(/Featured Games/g, 'Избранные игры');
		node.textContent = node.textContent.replace(/View All/g, 'Посмотреть все');
//Избранные игры первая
		node.textContent = node.textContent.replace(/Mods/g, 'Моды');
		node.textContent = node.textContent.replace(/Addons/g, 'Дополнения');
//Избранные проекты
		node.textContent = node.textContent.replace(/Featured Projects/g, 'Избранные проекты');
		node.textContent = node.textContent.replace(/Total Downloads/g, 'Всего скачиваний');
//профиль
		node.textContent = node.textContent.replace(/Profile/g, 'Профиль');
		node.textContent = node.textContent.replace(/Registered User/g, 'Зарегистрированный пользователь');
		node.textContent = node.textContent.replace(/Member for/g, 'На сайте уже');
		node.textContent = node.textContent.replace(/hours/g, 'часов');
		node.textContent = node.textContent.replace(/and/g, 'и');
		node.textContent = node.textContent.replace(/minutes/g, 'минут');
		node.textContent = node.textContent.replace(/Last active/g, 'Последнее посещение');
		node.textContent = node.textContent.replace(/mins ago/g, 'минут назад');
		node.textContent = node.textContent.replace(/min ago/g, 'минуту назад');
		node.textContent = node.textContent.replace(/sec ago/g, 'секунд назад');
		node.textContent = node.textContent.replace(/Edit/g, 'Редактировать');
		node.textContent = node.textContent.replace(/Thanks/g, 'Спасибо');
		node.textContent = node.textContent.replace(/Save Changes/g, 'Сохранить изменения');
//вкладка
//майн
//вверх
		node.textContent = node.textContent.replace(/Start Project/g, 'Начать проект');
//верхняя кладки
		node.textContent = node.textContent.replace(/All/g, 'Все');
		node.textContent = node.textContent.replace(/Modpacks/g, 'Модпаки');
		node.textContent = node.textContent.replace(/Resource Packs/g, 'Пакеты ресурсов');
		node.textContent = node.textContent.replace(/Worlds/g, 'Миры');
//меню с боку

//моды
//вверх
		node.textContent = node.textContent.replace(/Game Version/g, 'Версия игры');
		node.textContent = node.textContent.replace(/Versions/g, 'Версии');
		node.textContent = node.textContent.replace(/Sort by/g, 'Сортировать по');
		node.textContent = node.textContent.replace(/Date Created/g, 'Дате создания');
		node.textContent = node.textContent.replace(/Last Updated/g, 'Последнему обновлениему');
		node.textContent = node.textContent.replace(/Name/g, 'Имени');
		node.textContent = node.textContent.replace(/Popularity/g, 'Популярности');
		node.textContent = node.textContent.replace(/Search/g, 'Поиск');
//фигня которая появляется
		node.textContent = node.textContent.replace(/Become an author/g, 'Стать автором');
		node.textContent = node.textContent.replace(/Share content and earn points towards our rewards program/g, 'Делитесь контентом и зарабатывайте баллы для нашей программы вознаграждений');
		node.textContent = node.textContent.replace(/Learn More/g, 'Узнать больше');
//сами моды
		node.textContent = node.textContent.replace(/Install/g, 'Установить');
		node.textContent = node.textContent.replace(/Download/g, 'Скачать');
//вкладка с модом
//верх
		node.textContent = node.textContent.replace(/days ago/g, 'дней назад');
//сбоку
		node.textContent = node.textContent.replace(/About Project/g, 'О проекте');
		node.textContent = node.textContent.replace(/Project ID/g, 'ID проекта');
		node.textContent = node.textContent.replace(/Created/g, 'Создан');
		node.textContent = node.textContent.replace(/Updated/g, 'Обновлен');
		node.textContent = node.textContent.replace(/License/g, 'Лицензия');
		node.textContent = node.textContent.replace(/Follow/g, 'Подписаться');
//прочее
		node.textContent = node.textContent.replace(/Got it/g, 'Понятно');
    }
);