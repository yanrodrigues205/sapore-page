
alert("Seja bem-vindo! está é uma pagina de teste, nada oficial , O servidor está aberto, não tente alterar nenhum código fonte pois eu tenho seus dados salvos. Desde já agradeço.     :D                                                     Yan Pablo Rodrigues.")

function opendiv(){
    if(document.getElementById('open').style.display == 'none'){
document.getElementById('open').style.display='block';}
else{document.getElementById('open').style.display='none';
}
};

function clicar1(){
   document.getElementById("circulo1").src="imagens/img_OPCOES/circulo_red.png";
    document.getElementById("seta1").src="imagens/img_OPCOES/seta_red.png";
};
function clicar2(){
   document.getElementById("circulo2").src="imagens/img_OPCOES/circulo_red.png";
    document.getElementById("seta2").src="imagens/img_OPCOES/seta_red.png";
};


function opendiv2(){
    if(document.getElementById('open2').style.display == 'none'){
        document.getElementById('open2').style.display = 'block';
        document.getElementById("circulo3").src="imagens/img_OPCOES/circulo_red.png";
        document.getElementById("seta3").src="imagens/img_OPCOES/seta_red.png";
    }else
    {
        document.getElementById('open2').style.display = 'none';
        document.getElementById("circulo3").src="imagens/img_OPCOES/circulo.png";
        document.getElementById("seta3").src="imagens/img_OPCOES/seta.png";
    }

};
