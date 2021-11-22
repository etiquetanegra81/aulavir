const email = document.getElementById("mail");
const password= document.getElementById("clave")

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch  ) {
    email.setCustomValidity("¡por favor coloque una dirección de correo electrónico!");
  
  }else{
    email.setCustomValidity("");
  }
});

password.addEventListener("input",function(event){
    if(password ==""){
        alert("no puede estar vacio")
    }else{
        password.setCustomValidity("")
    }
})