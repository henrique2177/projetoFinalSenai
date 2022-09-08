//funçoes de adicionar e remover 
var numero = 0;

function add() {
    ++numero;
    document.getElementById('mais').innerHTML = numero;
}

function remove() {

    if (numero == "" ) {
        return 0;
    }

    --numero;
    document.getElementById('mais').innerHTML = numero;

}    

