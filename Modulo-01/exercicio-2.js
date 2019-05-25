function pares(x, y) {
    for (var i = x; i < y; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares(32, 321);


/* Outro modo; com prompt

var n = prompt("Digite um numero");
var total=n/2;
if(n/2 == 0){
    alert("Par");
}
if(n/2 == 1){
    alert("Impar");
}
alert(total);

fonte: https://pt.stackoverflow.com/questions/64058/saber-se-o-numero-%C3%A9-%C3%ADmpar-ou-par/64059 */