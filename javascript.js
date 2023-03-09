function openReal(realName) {
    document.getElementById(realName).classList.toggle('hidden')
};

function muestra1(){
    document.getElementById('bloque1').style.display="block";
    document.getElementById('bloque2').style.display="none";
  };
  
  function muestra2(){
    document.getElementById('bloque1').style.display="none";
    document.getElementById('bloque2').style.display="block";
  };