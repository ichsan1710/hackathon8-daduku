function handleLogout() {
    localStorage.removeItem("user");
    load();
    window.location.href = "index.html"
  }
  
  let userDB = [];
  let saldo = Number(localStorage.getItem("saldo"))

function handlingGanjil(){
    if(saldo >= 2000){
       let result =  Math.floor(Math.random()*6)+1;
       if (result % 2 === 1){
        saldo += 1000
        Swal.fire({
            title: "SENSATIONAL!!",
            text: `Selamat anda berhasil menebak angka ${result} dengan benar, sisa saldo anda ${saldo}`,
            imageUrl: "https://i.pinimg.com/736x/13/1e/69/131e69f083c52036204dbc2d8bbc5194.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          updateSaldo()
       }else{
        saldo -= 2000
        Swal.fire({
            title: "Yaaaaahh !!",
            text: `Maaf anda salah menebak angka ${result}, sisa saldo anda ${saldo}`,
            imageUrl: "https://bengkuluekspress.disway.id/upload/4eb281e6ab9da6c9a7401d3180e28e13.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          updateSaldo()
        }
    }else{
        Swal.fire("Maaf anda harus top up terlebih dahulu")
    }
}
  
  function handlingGenap(){
    // console.log('masuk genap');
    if(saldo >= 2000){
        let result =  Math.floor(Math.random()*6)+1;
        if (result % 2 === 0){
         saldo += 1000
         Swal.fire({
            title: "SENSATIONAL!!",
            text: `Selamat anda berhasil menebak angka ${result} dengan benar, sisa saldo anda ${saldo}`,
            imageUrl: "https://i.pinimg.com/736x/13/1e/69/131e69f083c52036204dbc2d8bbc5194.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          updateSaldo()
        }else{
         saldo -= 2000
         Swal.fire({
            title: "Yaaaaahh !!",
            text: `Maaf anda salah menebak angka ${result}, sisa saldo anda ${saldo}`,
            imageUrl: "https://bengkuluekspress.disway.id/upload/4eb281e6ab9da6c9a7401d3180e28e13.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          updateSaldo()
        }
     }else{
        Swal.fire("Maaf anda harus top up terlebih dahulu")
     }
  }
  
  function handlingPageTopUp() {
    window.location.href = "top-up.html"
  }

  function updateSaldo() {
    localStorage.setItem("saldo", saldo);
    load();
}
  
function load(){
    document.getElementById("saldo").innerText = saldo
}  
load()