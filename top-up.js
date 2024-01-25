let topDB = [];
let saldo = Number(localStorage.getItem("saldo"));

function handleTopUp() {
    let inputUser = document.getElementById("jumlah").value;
    
    if(!inputUser || inputUser < 0) {
        Swal.fire({
            title: "Please input top-up amount",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__animated
                animate__fadeOutDown
              `
            },
            hideClass: {
              popup: `
                animate__faster
              `
            }
        });
    } else {
      inputUser = parseInt(inputUser)
      saldo += inputUser
      localStorage.setItem("saldo", saldo)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for top-up",
            showConfirmButton: false,
            timer: 1500
        });
        document.getElementById("jumlah").value = ""
    }
    load()
}

function handleToMain () {
  window.location.href = "main.html"
}

function load(){
  document.getElementById("saldo").innerText = saldo
}  
load()