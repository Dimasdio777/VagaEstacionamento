const formulario = document.querySelector("form");

const iNumVagaCarro = document.querySelector(".cNumVagaCarro");
const iNumPlacaCarro = document.querySelector(".cNumPlacaCarro");
const iMarcaCarro = document.querySelector(".cMarcaCarro");
const iModeloCarro = document.querySelector(".cModeloCarro");
const iCorCarro = document.querySelector(".cCorCarro");
const iResponsavelCarro = document.querySelector(".cResponsavelCarro");
const iApartamento = document.querySelector(".cApartamento");
const iBloco = document.querySelector(".cBloco");

function cadastrar () {
    fetch("http://localhost:8080/cadastrar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            NumVagaCarro: iNumVagaCarro.value,
            NumPlacaCarro: iNumPlacaCarro.value,
            MarcaCarro: iMarcaCarro.value,
            ModeloCarro: iModeloCarro.value,
            CorCarro: iCorCarro.value,
            ResponsavelCarro: iResponsavelCarro.value,
            Apartamento: iApartamento.value,
            Bloco: iBloco.value})
    }
    )
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
};

function limpar() {
            iNumVagaCarro.value = "",
            iNumPlacaCarro.value = "",
            iMarcaCarro.value = "",
            iModeloCarro.value = "",
            iCorCarro.value = "",
            iResponsavelCarro.value = "",
            iApartamento.value = "",
            iBloco.value = ""
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    cadastrar();
    limpar();
});