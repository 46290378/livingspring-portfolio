const db = firebase.firestore();

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    db.collection("admins")
      .where("email", "==", email)
      .where("password", "==", pass)
      .get()
      .then(res => {
          if (!res.empty) {
              localStorage.setItem("admin", email);
              alert("Login successful!");
              window.location.href = "dashboard.html";
          } else {
              alert("Invalid email or password.");
          }
      })
}

function forgotPassword() {
    let email = prompt("Enter your admin email:");

    if (!email) return;

    alert("Password reset requested. Contact developer to reset manually.");
}
