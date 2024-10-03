//!-----MEMO JS-----!



//!-----LE SCOPE-----!

// //? La notion de scope (la portée d'une variable)
// //? Dans l'exemple ci-dessous on a 2 fois la même variable testScope1 qui est déclarée ?????
// //? En fait même si elles ont le même nom ce ne sont pas les même espaces mémoires qui sont alloués
// //? let testScope1 = 99; est dans le scope global de notre programme 
// //? let testScope1 = 12; est dans le scope de la fonction
// let testScope1 = 99;
// function maFonctionTestScope(){
//     let testScope1 = 12;
//     console.log('scope de la fonction :',testScope1);
// };
// maFonctionTestScope();
// console.log('scope hors de la fonction :',testScope1);



//!-----TEST DES OPERATEURS-----!

// //! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
// let a = 11;
// let b = 99;
// console.log("variable a:",a);
// console.log("variable b:",b);
// //! avec == on demande si a est égal à b
// console.log("c'est égal ? :",a == b);
// //!pour vérifier si a est différent de b on utilise !=
// console.log("C'est inégal ? :",a != b);
// //! Ensuite on retrouve les même opérateurs qu'en Mathématique
// //! ici on demande si a est strictement suppérieur à b
// console.log("Strictement suppérieur ? :",a > b);
// //! ici on demande si a est strictement inférieur à b
// console.log("Strictement inférieur ? :",a < b);
// //! ici on demande si a est inférieur ou égal à b
// console.log("Inférieur ou égal ? :",a <= b);
// //! ici on demande si a est suppérieur ou égal à b
// console.log("suppérieur ou égal ?:",a >= b);
// //? Attention : de base JS ne prend pas en compte le typage des variables : 
// //? ci dessous le nombre 2 est égal au caractère "2" 🤔
// console.log("le chiffre 2 = \"2\"?:",2 == "2");
// //! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
// //! c'est l'égalité stricte
// console.log("égalité stricte ?:",2 === "2");
// //! il y a aussi l'inégalité stricte avec l'opérateur !==
// console.log("inégalité stricte ?:",2 !== "2");



//!-------CONDITIONS TERNAIRES-------!

// //? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// //? cela permet de faire une condition if (simple) avec une syntaxe racourcie
// let whatIsYourAge = 6;
// console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// /*Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)*/
// let userPremium;
// /*On check si une variable est définie la condition c'est juste uneVariable ?*/
// console.log(userPremium?'OK 🤙':'Not OK 👺');
// /*↑ c'est l'équivalent de ↓*/
// console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// /*on doit lui assigner QQCHOSE*/
// userPremium = 'YES';
// console.log(userPremium?'OK 🤙':'Not OK 👺');



//!-----TEST D'OBJET-----!

// //? syntaxe  { uneProprieté:uneValeur } 
// //? dans un objet on assigne avec : plutot qu'avec = 
// let user = {
//     id:3657826,
//     'name':'Seagal',
//     firstName:'Steven',
//     badges:['🎥','👮‍♂️','🎸','🥋','🎤']
// };
// console.log(user);

// console.log(user);
//console.log(user.badges[3]);
// //! Notation object en point
// console.log(user.id);
// //! Notation tableau associatif
//console.log(user['id']);
// user.lol();


// //!-----Placer des elements dans une page web-----!

// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
// let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[9],premierH1);

// //! exemple de REMOVE CHILD
// document.body.removeChild(allParagraphes[9]);

// //! Exemple d'ajout dans le DOM avec APPEND / APPENDCHILD
// let laDiv = document.querySelector('.vide');

// laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// /* Append plutot pensé pour ajouter du contenu à la volé au format string*/
// /* si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher*/
// laDiv.append(allParagraphes[4]);
// /* Mais on a aussi la fonction appendChild;*/
// laDiv.appendChild(allParagraphes[0]);

// //! CREATE ELEMENT
// const newH1 = document.createElement('h1');
// /*la ligne du dessus equivalent à <h1></h1> */
// newH1.innerText = 'AZERTYUIOP';
// /*la ligne du dessus equivalent à <h1>AZERTYUIOP</h1> */
// newH1.style.backgroundColor = 'red';
// /*la ligne du dessus equivalent à <h1 style={css}>AZERTYUIOP</h1> */
// appDiv.append(newH1);

// //! Exemple creation et placement img
// const newImg = document.createElement('img');
// newImg.src = 'https://picsum.photos/200/300';
// appDiv.append(newImg);

// //! Exemple avec un lien 
// const newLien = document.createElement('a');
// newLien.href = 'https://picsum.photos/';
// newLien.innerText = 'cliquez ici';
// appDiv.append(newLien);



// //? Mini test pour capter event du Click
// document.addEventListener('click', function(unEventClick){
//     console.log('Yes Moi Clicker');
//     console.log(unEventClick);
//     console.log(unEventClick.x,unEventClick.y);
// }); 