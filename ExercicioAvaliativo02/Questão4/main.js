var filmes = [filme1, filme2, filme3]

var filme1 = {titulo: "O Guia do Mochileiro das Galáxias", ano: "2005", genero: "Ficção/Comédia"}

var filme2 = {titulo:"A viagem de Chihiro"  , ano: "2001", genero: "Fantasia/Ficção"}

var filme3 = {titulo: "Matrix", ano: "1999", genero: "Ficção/Ação"}

document.getElementById("demo1").innerHTML = "Filme adicionado: " + filme1.titulo + " do ano: " + filme1.ano + " genero: " + filme1.genero;
document.getElementById("demo2").innerHTML = "Filme adicionado: " + filme2.titulo + " do ano: " + filme2.ano + " genero: " + filme2.genero;
document.getElementById("demo3").innerHTML = "Filme adicionado: " + filme3.titulo + " do ano: " + filme3.ano + " genero: " + filme3.genero;
