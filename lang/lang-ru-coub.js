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
		node.textContent = node.textContent.replace(/Restart/g, 'Перезапуск');
		node.textContent = node.textContent.replace(/Settings/g, 'Настройки');
		node.textContent = node.textContent.replace(/More.../g, 'Еще');
		node.textContent = node.textContent.replace(/views/g, 'просмотрело');
		node.textContent = node.textContent.replace(/Copy link/g, 'Копировать ссылку');
		node.textContent = node.textContent.replace(/Bookmark/g, 'Закладка');
		node.textContent = node.textContent.replace(/Anime/g, 'Аниме');
		//node.textContent = node.textContent.replace(/Use coub/g, 'Использовать coub');
		//node.textContent = node.textContent.replace(/Upload picture/g, 'Загрузить изображение');
    }
);