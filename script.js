function calcular() {

    var nome = document.getElementById('nome').value || '';

    var altura = (document.getElementById('altura').value);

    var peso = (document.getElementById('peso').value);

    var mensagem = "seu imc é de "

    var classificacao = '';

    valor = peso / (altura * altura);

    if (nome !== '' && altura !== '' && peso !== ''){

      if (valor < 18.5) {
        classificacao = 'abaixo do peso.';
        document.getElementById('resultado').value = 
        nome + ' ' + mensagem + '' + valor.toFixed(2) + ' ' + classificacao;
    } else if (valor < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
        document.getElementById('resultado').value = 
        nome + ' ' + mensagem + '' + valor.toFixed(2) + ' ' + classificacao;
    } else if (valor < 30) {
        classificacao = 'levemente acima do peso.';
        document.getElementById('resultado').value = 
        nome + ' ' + mensagem + '' + valor.toFixed(2) + ' ' + classificacao;
    } else if (valor < 35) {
        classificacao = 'com obesidade grau I.';
        document.getElementById('resultado').value = 
        nome + ' ' + mensagem + '' + valor.toFixed(2) + ' ' + classificacao;
    } else if (valor < 40) {
        classificacao = 'com obesidade grau II'
        document.getElementById('resultado').value = 
        nome + ' ' + mensagem + '' + valor.toFixed(2) + ' ' + classificacao;
    } else  {
        (valor > 40.1)
        classificacao = 'com obesidade grau III. Cuidado!!';
        document.getElementById('resultado').value = 
        nome + ' ' + mensagem + '' + valor.toFixed(2) + ' ' + classificacao;
    }

}else{
    document.getElementById('resultado').value = 'Prencha todos os campos!!'
}



}