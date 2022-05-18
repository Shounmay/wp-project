class Existinguser {
	constructor(email) {
		this.email = email;
	}

	getEmail() {
		console.log('Email: ', this.email);
	}
}

const emailid = document.getElementById('emailInput');
console.log(emailid);

const signbtn = document.getElementById('login-btn');

console.log(signbtn);

function fun() {
	console.log('fun called');
	console.log(emailid.value);
	let regex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');

	if (regex.test(emailid.value)) {
		console.log('valid');
		const person = new Existinguse(emailid.value);

		person.getEmail();
	} else console.log('You have entered an invalid email address!');
}
