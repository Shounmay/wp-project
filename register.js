class Newuser {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	getName() {
		console.log('Name: ', this.name);
	}

	getEmail() {
		console.log('Email: ', this.email);
	}

	hashpass(pass) {
		console.log('Hashed PassWord');
	}
}

const email = document.getElementById('emailInput');
console.log(email);

const submitbtn = document.getElementById('submit-btn');

console.log(submitbtn);

const newpass = document.getElementById('newPassword');

const confirmpass = document.getElementById('confirmPassword');

const nameEl = document.getElementById('nameInput');

// newpass.addEventListener('click', function () {});

submitbtn.addEventListener('click', function () {
	// console.log('fun called');
	console.log(email.value);
	let regex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');

	if (regex.test(email.value)) {
		console.log('valid');
	} else alert('You have entered an invalid email address!');

	regex = new RegExp(
		'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
	);

	if (regex.test(newpass.value)) {
		console.log('valid');

		const person = new Newuser(nameEl.value, email.value, newpass.value);
		person.getName();
		person.getEmail();

		if (newpass.value != confirmpass.value) {
			alert('Passwords do not match!!');
		}
	} else alert('You have entered an invalid password format');
});
