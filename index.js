let arrPage = [
    "regis-section",
    "login-section",
    "main-section",
    "topup-section",
  ];
let userDB = [];
let saldo = 20000   

function handleLogin() {
  let inputUser = document.getElementById("input-login-username").value;
  let inputPassword = document.getElementById("input-login-password").value;

  if (!inputUser || !inputPassword) {
    alert("username / password is invalid");
    inputUser = "";
    inputPassword = "";
    showPage("login-section");
  } else {
    let isLogin = false;
    for (let i = 0; i < userDB.length; i++) {
      let perUser = userDB[i];
      if (
        perUser.username === inputUser &&
        perUser.password === inputPassword
      ) {
        isLogin = true;
      }
    }
    if (isLogin) {
      localStorage.setItem("user", inputUser);
      localStorage.setItem("saldo", 20000);
      document.getElementById("input-login-username").value = "";
      document.getElementById("input-login-password").value = "";
      // showPage("main-section");
      window.location.href = "main.html"
    } else {
      alert("username / password yang anda masukan salah");
      document.getElementById("input-login-username").value = "";
      document.getElementById("input-login-password").value = "";
      load();
    }
  }
}

function handleRegister() {
  let inputUser = document.getElementById("input-regis-username").value;
  let inputPassword = document.getElementById("input-regis-password").value;

  if (!inputUser || !inputPassword) {
    alert("username / password is invalid");
    inputUser = "";
    inputPassword = "";
    showPage("regis-section");
  } else {
    let found = false;
    for (let i = 0; i < userDB.length; i++) {
      let perUser = userDB[i];
      if (perUser.username === inputUser) {
        found = true;
        break;
      }
    }

    // kondisi jika ada yg sama
    if (found) {
      alert("username telah terdaftar");
      document.getElementById("input-regis-username").value = "";
      document.getElementById("input-regis-password").value = "";
      showPage("regis-section");
    } else {
      //kondisi jika tidak ada user yang sama dan data valid
      let obj = {
        username: inputUser,
        password: inputPassword,
      };
      userDB.push(obj);

      document.getElementById("input-regis-username").value = "";
      document.getElementById("input-regis-password").value = "";
      showPage("login-section");
    }
  }
}

function showPage(page) {
    console.log(page, "===")
  for (let i = 0; i < arrPage.length; i++) {
    let perPage = arrPage[i];
    if (perPage === page) {
      document.getElementById(perPage).style.display = "block";
    } else {
      document.getElementById(perPage).style.display = "none";
    }
  }
  if (page === "main-section"){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('/asset/2275416.jpg')"
  }
}

function handleLogout() {
  localStorage.removeItem("user");
  load();
}

function load(){
  let user = localStorage.getItem("user");
  if (!user) {
    showPage("login-section");
  }
  if (user) {
    showPage("main-section");
  }
  document.getElementById("saldo").innerText = saldo
}
load()
showPage("login-section")
