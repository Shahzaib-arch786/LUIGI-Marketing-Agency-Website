
const signInForm = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    else if (email === "test@example.com" && password === "password123") {
        alert("Sign in successful!");
        return window.location.href = "dashboard.html";     
    }
    else {
        alert("Invalid email or password. Please try again.");
        return false;
    }

    return true;
}

const signUpForm = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    const fname = document.getElementById("fname").value;

    if (email === "" || password === "" || username === ""|| fname === "") {
        alert("Please fill in all fields.");
        return false;
    }
    else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    else if (email === "test@example.com") {
        alert("Sign up successful!");
        return window.location.href = "index.html";     
    }

    return true; 
}

if (!document.querySelector('#ft7ztkji0g')) {
		var newDiv = document.createElement('div');
		newDiv.setAttribute('key', 'Online Store Counter');
		newDiv.setAttribute('class', 'ft');
		newDiv.setAttribute('id', 'ft7ztkji0g');
		var newScript = document.createElement('script');
		newScript.setAttribute('src', 'https://wdg.fouita.com/widgets/0x2a7c87.js');
		newDiv.appendChild(newScript);

		document.body.appendChild(newDiv);
	}