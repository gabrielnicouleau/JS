// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnYwTSx73MzdAcOwlAxwDwX0lbx3Ufd9k",
    authDomain: "groupeevan-c844c.firebaseapp.com",
    databaseURL: "https://groupeevan-c844c-default-rtdb.firebaseio.com",
    projectId: "groupeevan-c844c",
    storageBucket: "groupeevan-c844c.appspot.com",
    messagingSenderId: "330994610716",
    appId: "1:330994610716:web:27a9b72e943814572d25d9"
};

//* CREATE (AJOUTER)
  //TODO 1: Récupérer le bouton avec l'id add-user-btn°
  //TODO 2: sur ce bouton placer un addEventlistener au click et qui lance la fonction addBtnClicked
  //TODO 3: Créer la fonction addUserBtnClicked
  //TODO 5: Dans la ƒ° addUserBtnClicked, Récupérer TOUS LES INPUTS avec laclasse user-input dans 1 variable addUserInputsUI (getElementsByClassName)
  //TODO 6: Dans la ƒ° addUserBtnClicked, créer une variable newUser (qui est un objet vide)
  //TODO 7: Dans la ƒ° addUserBtnClicked, faire une boucle for pour parcourir les input dans addUserInputsUI
  //TODO 8: Dans la Boucle, Pour chaque éléments parcourus on récupère Dans 1 variable key = addUserInputsUI[i].getAttribute('data-key');
  //TODO 9: Dans la boucle, 1 variable value = addUserInputsUI[I].value
  //TODO 10: Dans la boucle, Pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur :  newUser[key] = value
  //TODO 11: après le parcours des inputs, sur usersRef on va faire un push de newUser
  //TODO 12: Dans la ƒ° addUserBtnClicked, on console log un msg type nouvel utilisateur enregistré
  //TODO 13: Dans la ƒ° addUserBtnClicked, On console log le nom et l'âge du nouvel utilisateur
  //TODO 14: Dans la ƒ° addUserBtnClicked, On ré initialise le formulaire avec l'id add-user-form

firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");


const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());

const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI.addEventListener("submit", (event) => event.preventDefault());

const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");

readUserData();

function addUserBtnClicked() {
    let addUserInputsUI = document.getElementsByClassName("user-input"); //onrécupère tous les imputs du document ayant 'user-input' dans leur classes
    let newUser = {}; // on créé un objet vide nommé newUser
    for(let i=0;i<addUserInputsUI.length;i++){ //Dans une boucle de la longueur des imputs visés par adduserInputsUI:
        let key = addUserInputsUI[i].getAttribute('data-key'); //On récupère l'attribut 'data-key' de l'élément i de addUserInputsUI que l'on nomme key
        let value = addUserInputsUI[i].value; //On récupère la valeur de l'élément i de addUserInputsUI que l'on nomme value
        newUser[key] = value; //on remplis l'objet newUser avec en élément 'key' la valeur récupérée plus haut.
    }
    usersRef.push(newUser); //On envoie les données de newUser sur la base de donnée.
    console.log(`utilisateur sauvegardé`);
    console.log(`nom: ${newUser.name} age: ${newUser.age}`);

};

function readUserData() {

};

function userClicked(event) {

};

function editButtonClicked(event) {

};

function saveUserBtnClicked() {

};

function deleteButtonClicked(event) {

}