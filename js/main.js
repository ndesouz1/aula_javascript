//var nome = "Nayara de Souza";
/* var idade = 28;
alert(nome + " tem " + idade + " anos!");*/
//var idade1 = 20;
//var idade2 = 8;
//var n1 = 5;
//var n2 = 3;
//var frase = "A Itália tem a melhor comida do mundo!"
//alert(idade1+ idade2);
// com aspas (string) daria erro "1020"
//ir na pagina web>inspecionar>console
//console.log(nome);
//console.log(idade1 + idade2);
//console.log(n1 * n2);
//console.log(frase.replace("Itália", "Brasil"));
//alert(frase.replace("comida","pizza"));
//console.log(frase.toLocaleUpperCase());


// ####################### ARRAY E DICIONÁRIO ###################################
//var lista =["maça", "pera", "laranja"];
//lista.push("uva");//coloca o elemento no final da lista
//lista.pop()//tira o último elemento
//console.log(lista[1]);//imprime o 2 elemento
//console.log(lista.length);//tamanho da lista
//console.log(lista.reverse());//método de inverter a lista
//console.log(lista);
//console.log(lista.toString());
//alert(lista[0]);
//console.log(lista[0]);// maça
//console.log(lista.toString()[0]);// m
//console.log(lista.join(" - "));

/*var fruta = {nome:"maça", cor:"vermelha"}//dicionário
console.log(fruta.nome);
alert(fruta.cor); */

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"},
{nome:"pera", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome); */

//#################### CONDICIONAIS, REPETIÇÃO e DATE #######################

/***************************condicional if/ else:
var idade = prompt ("Qual sua idade?")
    //ou
    //var idade = 18;
    //if(idade => 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; */

//*****************laços de repetição while e for:
/*var count = 5;
while (count <=5){
    console.log(count);
    (alert(count)
    count = count++;
}*/

/*var count;
for(count = 1; count <= 5; count++){
    alert (count);
}*/

//*******************************************data:
/*var d = new Date();
alert(d);
alert(d.getMonth()+1); //print 7....o month conta do 0...por isso tem q por +1 no fim
get(d.getMinutes());
get(d.getDay());
get(d.getHours());
*/

//#############################################FUNÇÂO##########################
/*functon soma (n1, n2){
    return n1 + n2;
}
alert(soma(5,10);) */

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Itália", "Itália", "Brasil"))*/

/*
    var validar = 0; // variavel global
    function validaIdade(idade){
    if(idade >=18){
        validar = true
    }else{
        validar = false
    } 
    return validar;
}  
var idade = prompt("Qual sua idade?")
console.log(validarIdade(idade));*/

//alert(soma(5,10));

//function clicou(){
   // alert("obrigado por clicar!");
//}
//  console.log(document.getElementById("agradecimento"));
    
function clicou(){
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}  

//*******redirecionar p outra pg:
function redirecionar(){
    window.open("https://web.digitalinnovation.one/course/");
    //window.location.href = "https://web.digitalinnovation.one/course/";

}

function tocar(elemento){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("tocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada")
}


function funcaoChange(elemento){
    console.log(elemento.value);
    
}











