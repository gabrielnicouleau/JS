const firebaseConfig = {
    apiKey: "AIzaSyDHr1HtJMSd6K9be-TuJ2vc3shXoHDT6MA",
    authDomain: "monsuperprojet-4533b.firebaseapp.com",
    projectId: "monsuperprojet-4533b",
    storageBucket: "monsuperprojet-4533b.appspot.com",
    messagingSenderId: "517948271790",
    appId: "1:517948271790:web:1376ea7fdf13449061513f"
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