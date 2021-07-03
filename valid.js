const validText = document.getElementById("valid-text");
const form = document.querySelector("form");
let isValidate = false;

const submit = () => {
	alert("Ваши данные отправлены");
	for (elem of form.elements) {
		if (elem.classList.contains("form__input")) {
			elem.classList.remove("valid");
		}
	}
};

const validateForm = (elem) => {
	const regexName = /^([a-zа-яё]+|\d+)$/i;
	const regexTel = /^((\+?3)?8)?0\d{9}$/;
	const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const regxPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,}/g;

	if (elem.name === "name") {
		addClassValidForm(elem, regexName);
	}
	if (elem.name === "email") {
		addClassValidForm(elem, regexEmail);
	}
	if (elem.name === "phone") {
		addClassValidForm(elem, regexTel);
	}
	if (elem.name === "password") {
		addClassValidForm(elem, regxPassword);
	}
};

const addClassValidForm = (elem, regex) => {
	const nextlem = elem.previousElementSibling;
	console.log(nextlem);
	if (!regex.test(elem.value) && !elem.value !== "") {
		elem.classList.remove("valid");
		elem.classList.add("isValid");
		isValidate = false;
		nextlem.textContent = `Введите коректно ${elem.name}`;
	} else {
		elem.classList.remove("isValid");
		elem.classList.add("valid");
		isValidate = true;
		nextlem.textContent = "";
	}
};

for (let elem of form.elements) {
	if (elem.classList.contains("form__input") && elem.tagName !== "BUTTON") {
		elem.addEventListener("blur", () => {
			validateForm(elem);
		});
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	for (elem of form.elements) {
		if (elem.classList.contains("form__input")) {
			if (elem.value === "" && elem.tagName !== "BUTTON") {
				elem.previousElementSibling.textContent = "Данное поле не заполнено";
				isValidate = false;
			} else {
				elem.previousElementSibling.textContent = "";
				isValidate = true;
			}
		}
	}

	if (isValidate) {
		console.log("Submit");
		submit();
		form.reset();
	} else {
		alert("Есть незаполненые поля");
	}
});
