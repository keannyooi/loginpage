firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		document.getElementById("user_div").style.display = "block";
		document.getElementById("login_div").style.display = "none";
	}
	else {
		document.getElementById("user_div").style.display = "none";
		document.getElementById("login_div").style.display = "block";
	}
})

function login() {
	let userEmail = document.getElementById("email_field").value;
	let userPass = document.getElementById("password_field").value;
	firebase.auth()
			.signInWithEmailAndPassword(userEmail, userPass)
			.catch (function (error) {
				let errorCode = error.code;
				let errorMessage = error.message;
				window.alert(`Error: ${error.message}`);
	});
}

function logout() {
	firebase.auth().signOut();
}