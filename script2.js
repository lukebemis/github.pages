function check(){
  var input = document.getElementById("password").value;
  var input2 = document.getElementById("password2").value;

  input = input.trim();
  document.getElementById("password").value = input;
  
    if(input.length >= 8){
    document.getElementById("check1").style.color = "rgb(66, 236, 89)";
  }else{
    document.getElementById("check1").style.color = "rgb(236, 66, 66)";
  }

    if(input.match(/[0-9]/i)) {
      document.getElementById("check2").style.color = "rgb(66, 236, 89)";
    } else {
      document.getElementById("check2").style.color = "rgb(236, 66, 66)";
    }
    
    if(input.match(/[A-Za-z]/i)){
      document.getElementById("check3").style.color = "rgb(66, 236, 89)";
    } else {
      document.getElementById("check3").style.color = "rgb(236, 66, 66)";
    }
    
    if(input.match(/[!@#$%&*-]/i)){
      document.getElementById("check4").style.color = "rgb(66, 236, 89)";
    } else {
      document.getElementById("check4").style.color = "rgb(236, 66, 66)";
    }

    if(input.match(/[!@#$%&*-]/i)){
      document.getElementById("check4").style.color = "rgb(66, 236, 89)";
    }else{
      document.getElementById("check4").style.color = "rgb(236, 66, 66)";
    }

    if(input === input2){
      document.getElementById("check5").style.color = "rgb(66, 236, 89)";
    }else{
      document.getElementById("check5").style.color = "rgb(236, 66, 66)";
    }
} // curly fim da funcao















const element = document.getElementById("alerta");
element.addEventListener("click", alerta)
function alerta() {
  alert("Ainda não há opção de recuperação de senha, sinto muito!")
}