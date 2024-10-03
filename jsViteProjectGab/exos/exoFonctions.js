//TODO : Pourquoi ca beug ?
// function buggyFunction() {
//     let wtf = 9;
//     console.log(wtf);
// }; 
// buggyFunction();  //cette fonction ne sert à rien
// console.log(wtf);
// tu as déclaré ta variable dans ta fonction, tu ne peux pas la réutiliser en dehors de ta fonction le mieux c'est de l'écrire comme ceci
// let wtf = 9;
// console.log(wtf);
// tu pourras ainsi utiliser la variable à l'intérieur et à l'extérieur de ta fonction.


//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
// let something = 44; //nom pas clair
// function functionBugParent() { //nom pas clair
//     let something = 9; //ta variable doit valoir 9 ou 44? pourquoi la déclarer en dehors si tu la redéclare dans ta fonction?
//     console.log(something); //cette ligne affichera 9 car elle est dans la fonction où something=9 
//     console.log(lesNews); //cette ligne bug car tu n'as pas encore déclaré ta variable lesnews
//     function functionBugEnfant() { //cette fonction n'est pas utile
//         let lesNews = `il est 99h67`; //déclare les news en dehors de ta fonction si tu dois l'utiliser en dehors de celle-ci. +nom pas clair +heure fausse.
//     }
// };
// functionBugParent(); //cette ligne n'a pas d'utilité + nom pas convenable.
// console.log(something); //cette ligne affichera 44 car something = 44 en dehors de la fonction

// exemple de correction

// let something = 44;
// let lesNews = `il est 99h67`;
// function functionBugParent() {
//     let something = 9;
//     console.log(something);
//     console.log(lesNews);
// }
// console.log(something);



//TODO : EXO sur les objets:
// let user = {
//         name:'Gabriel',
//         firstName:'Nicouleau',
//         age: 34,
//         passions:{
//             passion1: "cinéma",
//             passion2: "cross-fit",
//         },
//     };
// console.log(`Bonjour, ${user.name} ${user.firstName} tu as maintenant ${user.age} ans, bienvenue!`);
// console.log(user.passions);
// console.log(`voici ta deuxième passion: ${user.passions.passion2}`);

// /*  Tout est objet en JS car JS est un language orienté Objet----->peux construire ses variables par constructor comme sur JAVA  */



// TODO : Hacker le contenu des paragraphes de notre page HTML

/* 
phase 1

côté template html rajouter plein de <p></p>
On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
On va faire un console log de lesTxt 


Phase 2 

Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
On console log la variables textesTab 


Phase 3 (on peut travailler sur un Array)

Sur textesTab on va utiliser la ƒ° map(),
dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (auChoix)
cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire
*/



// const lesTxt = document.body.getElementsByTagName("p"); // on récupère les paragraphes <p> du body du document HTML et on les places dans une variable lesTxt
// console.log(lesTxt); // on en affiche le contenu dans la console afin de voir ce que l'on veux modifier
// let newTxt = Array.from(lesTxt); // on transforme la variable lesTxt qui contient nos paragraphes <p> en un nouveau tableau que l'on nomme newTxt
// newTxt.map(x => x.innerHTML = "HACKED!"); // on change le contenu HTML des <p> contenus dans chaque case de newTxt
// newTxt.map(x => x.style.color = "red"); // on change la couleur des <p> contenus dans chaque case de newTxt
// newTxt.map(x => x.style.textAlign = "center"); // on change le textAlign des <p> contenus dans chaque case de newTxt
// //!-----Et c'est ainsi que l'on a hacké notre page HTML-----!



// TODO: parcourir le DOM:

// //? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
// let tousLesP = document.getElementsByTagName('p');
// let premierP = document.getElementsByTagName('p')[0];
// console.log('La HTMLCollection',tousLesP);
// console.log('premierP',premierP);
// console.log('Le 2e P',tousLesP[1]);

// premierP.innerText = "Pascal Winner";
// tousLesP[2].innerText = 'YOLO jai Hacké le truc';

// let lesParagsuper = document.getElementsByClassName('super');
// console.log('lePsuper',lesParagsuper);
// let lePcool = document.getElementById('cool');
// console.log('lePcool',lePcool);



// //! EXO création d'éléments

// //TODO: via JS afficher le profil  utilisateur dans la page web
// const userData = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
//   };

// let userFiche = document.querySelector(".userProfile");
// userFiche.style.background = "linear-gradient(.125turn, midnightblue, 33%, pink, 95%, orange)";
// userFiche.style.margin = "Auto";
// userFiche.style.marginTop = "5em";
// userFiche.style.padding = "2em";
// userFiche.style.width = "700px";
// userFiche.style.boxShadow = "-20px 20px 20px gray";
// console.log ("userfiche via querySelector",userFiche);

// const profileImg = document.createElement('img');
// profileImg.src = userData.img;
// userFiche.append(profileImg);

// const profileName = document.createElement("h1");
// profileName.style.color = "white";
// profileName.style.fontWeight = "bold";
// profileName.innerText = userData.name;
// userFiche.append(profileName);

// const profileEmail = document.createElement("H2");
// profileEmail.style.color = "white";
// profileEmail.style.fontStyle = "italic";
// profileEmail.innerText = userData.email;
// userFiche.append(profileEmail);

// const profileAge = document.createElement("H2");
// profileAge.style.color = "white";
// profileAge.style.fontStyle = "italic";
// profileAge.innerText = userData.age;
// userFiche.append(profileAge);

// const profileDob = document.createElement("H2");
// profileDob.style.color = "white";
// profileDob.style.fontStyle = "italic";
// profileDob.innerText = userData.dob;
// userFiche.append(profileDob);

// const profileActive = document.createElement("H2");
// profileActive.style.color = "white";
// profileActive.style.fontStyle = "italic";
// profileActive.innerText = userData.active;
// userFiche.append(profileActive);

// TODO créer une fonction d'ajout de texte:

// function ajouterTexte(prenom, nom){
//     let newLine = document.createElement("p");
//     userFiche.append(newLine)
//     let newLine1 = document.createElement("b");
//     newLine1.style.color = "white";
//     newLine1.innerText = prenom+" - "
//     newLine.append(newLine1);
//     let newLine2 = document.createElement("i");
//     newLine2.style.color = "white";
//     newLine2.innerText = nom;
//     newLine.append(newLine2);
// };

// ajouterTexte('Daniel','Gracia');
// ajouterTexte('Jarry','Borne');
// ajouterTexte('JCVD','OK');
// ajouterTexte('Dong','RoRO');



// //TODO: changer le titre H1 dans notre document:
// let leH1 = document.querySelector(".title")
// let selectTitle = false; //booleen appelé selectTitle (ne peux etre que vrai ou faux-->va nous servir à faire un équivalent à )
// leH1.innerText = "D.O.M. Events"; // on donne à leH1.innerText une première valeur correspondant à true.
// leH1.addEventListener("click",()=>{ //surveille le click sur leH1
//    leH1.innerText = selectTitle ? "D.O.M. Events":"coucou!"; // donne les deux valeurs de selectTitle et lui demande si le innerText correspond à selectTitle
//    selectTitle = !selectTitle; //selectTitle doit être différent de sa valeur d'origine
// });  // la fonction change le titre H1 au click de la souris.



//!-----EXO classList-----!

// //TODO: changer le titre selon le boutonb sur lequel on clqiue
// let leH1 =document.querySelector("#exoClassList");  //on lie la variable leH1 au h1 d'ID exoClassList.
// console.log(leH1);
// let lienA = document.querySelectorALL("a")[0];
// let lienB = document.querySelectorAll("a")[1];
// let lienC = document.querySelectorAll("a")[2];  //on lie les liens aux variables lienA, lienB, et lienC.
// console.log(lienA);
// console.log(lienB);
// console.log(lienC);
// lienA.addEventListener("click",()=>{
//     leH1.classList.add("couleur");  //on demande d'ajouter à lienA la class couleur au click.
// });
// lienB.addEventListener("click",()=>{
//     leH1.classList.remove("couleur");  //on demande de retirer de lienA la class couleur au click.
// });
// lienC.addEventListener("click",()=>{
//     leH1.classList.toggle("couleur");  //on demande switcher sur lienA la class couleur au click.
// });



//!-----EXO preventDefault et events-----!

// //TODO: intégrer une image sur la page au niveau de la souris à chaque fois que l'on clique.

// document.addEventListener('click', function(unEventClick){  //pour l'event click que l'on nomme unEventClick, on fait:
//     let imgClicked = document.createElement('img'); //une création d'image nommée imgClicked dans le document
//     /*imgClicked.src ="https://www.icegif.com/wp-content/uploads/2023/03/icegif-1393.gif";*/ //l'image prend en source Stich (ou)
//     /*imgClicked.src ="https://www.icegif.com/wp-content/uploads/2023/05/icegif-680.gif";*/ //l'image prend en source Cartman (ou)
//     imgClicked.src = `https://picsum.photos/50/50?random=${unEventClick.y}${unEventClick.x}`; //l'image prendra en source picsum (en ~ random)
//     imgClicked.style.position = 'absolute'; //la position de l'image sera absolut
//     imgClicked.style.borderRadius = "3px" //son border radius sera de 3px
//     imgClicked.style.top = `${unEventClick.y}px`; //son top correspondra au y de unEventClick
//     imgClicked.style.left = `${unEventClick.x}px`; // son left correspondra au x de unEventClick
//     imgClicked.style.height = "100px";
//     imgClicked.style.width = "100px"; 
//     document.body.append(imgClicked); // on l'intègrera au body du document.
//     console.log("l'evenement",unEventClick);
//     console.log("les coordonnées",unEventClick.x,unEventClick.y);
// });

// //!-----EXO FOCUS ET BLUR-----!
// //TODO: faire réagir les inputs au focus et au blur( en bleu ):
// const input = document.body.querySelector("#exampleInputEmail1");
// input.addEventListener("focus",()=>{
//     input.classList.add("focusColor");
// });
// input.addEventListener("blur",()=>{
//     input.classList.remove("focusColor");
// });


//!-----EXO mouseleave-----!
//TODO: faire en sorte qu'un message s'affiche quand on quitte la page
// const h3Title = document.querySelector('#mouseOut');
// console.log(h3Title);
// document.body.addEventListener('mouseleave',()=>{
//     //? Comme vu pour les objets on peux accèder aux propriétés dans l'objet style de l'element 
//     h3Title.style.display = 'block';
//     h3Title.style.color = 'red';
//     h3Title.style.backgroundColor = 'chartreuse';
//     h3Title.innerText = 'Ne PARTEZ PAS, vous venez de gagner 1 millions de Dollars';
//     h3Title.style.textAlign = 'center';
// });


//!-----EXO LOAD-----!
// //TODO: faire réagir la console au load des 4 images.
// const imagesPage = document.body.getElementsByTagName('img');
// const newTableau = Array.from(imagesPage);
// newTableau.map(x => x.addEventListener("load",()=>console.log(`image numero ${} vient de finir de charger`)));


//!-----EXO REACTION AU SCROLL-----!
//TODO: 

//!----EXO PREVENT DEFAULT-----!
const googleLink = document.querySelector('#google')
console.log('googleLink');
const formulaire = document.querySelector('form');
console.log(formulaire);
googleLink.addEventListener("click", function(clickEvent){
    clickEvent.preventDefault();
});