

function validacao(){
const fomW =document.getElementById('w');
const email = document.getElementById('email-i');
const user = document.getElementById('user-i');
const password = document.getElementById('password-i');

    if ((email.value=='')&&(user.value=='')&&(password.value=='')) {

        w.textContent ='You have to fill all inputs';
        //alert("You need to fill the forms");
    } else if((email.value=='')||(user.value=='')||(password.value=='')){
           
        w.textContent ='You have to fill all inputs';
      

    }else{
        var opc =confirm("We could'nt find your account "+"-Would you like to register your account ?");
    }
}
