"use strict";
const refSectionEnigmes = document.getElementById("section-enigmes");
const refEnigmeCourante = document.getElementById("enigme-courante");
const arrEnigmesPigees = new Array();
arrEnigmesPigees[0] = "Je suis couverte de trous et malgré tout, je retiens l'eau.";
arrEnigmesPigees[1] = "On peut me trouver au fond d'un bateau de pêche ou au milieu d'un court de tennis.";
arrEnigmesPigees[2] = 'Je peux être de folie, de sable ou de beauté.';
arrEnigmesPigees[3] = 'On me trouve après la Terre mais avant avril.';
arrEnigmesPigees[4] = "Je peux être d'or, de sel ou de crayon.";
const arrReponsesEnigmesPigees = new Array();
arrReponsesEnigmesPigees[0] = 'éponge';
arrReponsesEnigmesPigees[1] = 'filet';
arrReponsesEnigmesPigees[2] = 'grain';
arrReponsesEnigmesPigees[3] = 'mars';
arrReponsesEnigmesPigees[4] = 'mine';

let indexEnigmeCourante = 0;

// Gestion des clics de souris
document.getElementById("bouton-repondre").addEventListener("click", validerReponseEnigme);
document.querySelector("form").addEventListener("submit", empecherEnvoiForm);

initialiserEnigmes();

function empecherEnvoiForm(objEvenement) {
    objEvenement.preventDefault();
  }

function obtenirNombreEntierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

///////////////////////////////
// Section du code à compléter
function initialiserEnigmes() {
  const NB_ENIGMES_PIGEES = 5;
  for ( let i = 0; arrEnigmesPigees.length < NB_ENIGMES_PIGEES; i++) {
    let indexAleatoire = obtenirNombreEntierAleatoire(0, arrEnigmesPigees.length -1);
      console.log(indexAleatoire)
      arrEnigmesPigees.push(arrEnigmes[indexAleatoire]);
      arrReponsesEnigmesPigees.push (arrReponsesEnigmes[indexAleatoire]);
      refEnigmeCourante.textContent = arrEnigmes;
      arrEnigmesPigees.slice(indexAleatoire,1);
      arrReponsesEnigmes.slice(indexAleatoire,1);
  }
  // À compléter
}

function validerReponseEnigme() {
  const refCommentaireEnigme = document.getElementById("commentaire-enigme");
  const refChampReponseEnigme = document.getElementById("champ-reponse-enigme");
  const strReponseEntree = refChampReponseEnigme.value;
  const strReponseAttendue = arrReponsesEnigmesPigees[indexEnigmeCourante];

  // À compléter
}
///////////////////////////////