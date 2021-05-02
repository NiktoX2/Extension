const base = document.querySelector('.button.button--overlay.button--hollow');

let login = document.createElement('a');
login.textContent = 'Войти';
login.classList.add('button');
login.classList.add('button--overlay');
login.classList.add('button--hollow');
login.href = "/twitch-login?returnUrl=%2fminecraft%2fmc-mods%2ftinkers-construct%2ffiles"

base.replaceWith(login);

const base1 = document.querySelector('.button.button--overlay.button--hollow');

let SignUp = document.createElement('a');
SignUp.textContent = 'Зарегистрироваться';
SignUp.classList.add('button');
SignUp.classList.add('button--overlay');
SignUp.classList.add('button--hollow');
SignUp.href = "/twitch-signup?returnUrl=%2f"

base.append(SignUp);
