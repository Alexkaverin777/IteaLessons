/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
const divIn = document.querySelector('.result-task-2');

const creactFormIn = () => {
    const creatForm = document.createElement('form');
    const creatInputLog = document.createElement('input');
    const creatInputPass = document.createElement('input');
    const creatBtn = document.createElement('button');

    creatInputLog.setAttribute('type', 'text');
    creatInputLog.setAttribute('name', 'login');
    creatInputPass.setAttribute('type', 'password');
    creatInputPass.setAttribute('name', 'password');
    creatBtn.innerText = 'Войти';

    creatForm.append(creatInputLog);
    creatForm.append(creatInputPass);
    creatForm.append(creatBtn);

    divIn.append(creatForm);

    creatBtn.addEventListener('click', getValueInput)
}

const renderFormLolacStor = () => {
    const {login, password} = JSON.parse(localStorage.getItem('regist'));

    const divWrapper = document.createElement('div'),
        creatH2 = document.createElement('h2'),
        creacP = document.createElement('p'),
        creacBtn = document.createElement('button');

        creacBtn.innerText = 'Выйти';
        creatH2.innerText = `Loggin: ${login}`;
        creacP.innerText = `Passworg: ${password}`;

        divWrapper.append(creatH2);
        divWrapper.append(creacP);
        divWrapper.append(creacBtn);

        divIn.append(divWrapper);

        creacBtn.addEventListener('click', (e) => {
            e.preventDefault();
            divWrapper.remove()
            localStorage.removeItem('regist');
            creactFormIn()
        })

}

const getValueInput = (e) => {
    e.preventDefault()
    const form = document.querySelector('form');
    const log = form.login;
    const pas = form.password;
    console.log(log.value);
    if(log.value && pas.value){
        const data = {
            login: log.value,
            password: pas.value
        }

        localStorage.setItem('regist', JSON.stringify(data))
        form.remove()
        renderFormLolacStor()
    }

}

if (!localStorage.getItem('regist')) {
    creactFormIn()
} else {
    renderFormLolacStor()
}