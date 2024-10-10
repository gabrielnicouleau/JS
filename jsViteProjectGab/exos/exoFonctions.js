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
// const googleLink = document.querySelector('#google')
// console.log('googleLink');
// const formulaire = document.querySelector('form');
// console.log(formulaire);
// googleLink.addEventListener("click", function(clickEvent){
//     clickEvent.preventDefault();
// });




//!-----EXO aprem JS-----!

//!-----EXO phrase-----!
//TODO: imaginez les ≠ variables qu’on pourrait retrouver dans une commande de pizza. Affichez en console une phrase qui remercie le client avec ses infos et qui résume la commande BONUS : Faire une interface dans le DOM pour afficher une UI de récapitulatif de commande

// function priseDeCommande(){
//     let userName = prompt("renseignez votre nom:");
//     let userContact = prompt ("renseignez votre numero de téléphone:");
//     let userAdresse = prompt ("renseignez votre adresse");
//     let userModeDeCommande = prompt ("sur place, à emporter ou en livraison?");
//     let userModeDePaiement = prompt ("comment souhaitez-vous regler?");
//     let userCommande = prompt ("quel est votre commande");

//     const userData = {
//             name: userName,
//             contact: userContact,
//             adresse: userAdresse,
//             modeDeCommande: userModeDeCommande,
//             paiement: userModeDePaiement,
//             commande: userCommande
//     };
//     const userReponse =Object.values(userData);
//     console.log(`${userReponse[0]},
//     votre commande: ${userReponse[5]} a bien été prise en compte
//     votre adresse est: ${userReponse[2]}
//     votre numéro de téléphone est: ${userReponse[1]}
//     vous souhaitez que votre commande soit: ${userReponse[3]}
//     et souhaitez regler: ${userReponse[4]}`);

//     const message = document.createElement('p');
//     message.style.color = "black";
//     message.innerText = `${userReponse[0]},
//     votre commande: ${userReponse[5]} a bien été prise en compte
//     votre adresse est: ${userReponse[2]}
//     votre numéro de téléphone est: ${userReponse[1]}
//     vous souhaitez que votre commande soit: ${userReponse[3]}
//     et souhaitez regler: ${userReponse[4]}`;
//     document.querySelector('#commande').append(message);
// }
// priseDeCommande();


//!-----EXO Quizz VAR: 
//TODO: Pour comprendre la ≠ entre var, let et const comme pour ce qu’on avait fait pour le scope. mode ROLE PLAY, vous avez de review de code à faire avec des réponses à envoyer à un nouveau stagiaire. (Soyez exhaustif et bienveillant)
// Lorsqu'il est utilisé dans un bloc, let permet de limiter la portée de la variable à ce bloc. var quant à lui limite la portée de la variable à la fonction et est aujourd'hui déprécié.
// de plus, On utilisera var ou let pour la variable, dont la valeur évolue durant l'exécution du scope au sein duquel elle est visible. On utilisera const pour la variable, dont la valeur doit rester constante tout au long de l'exécution du scope au sein duquel elle est visible.


//!-----exo import-export(hello.js)-----!
//TODO: importer le script hello.js en modulaire.
// import '../scripts/hello';
// import { moduleHello } from '../scripts/hello';
// moduleHello("Gab");


//!-----EXO zone de texte-----!
//TODO:faire en sorte qu'une zone de texte remplisse une div sur la meme page au fur et à mesure que l'on tape dedans.
// let userText = document.querySelector('#zoneE'); //On lie la variable à l'imput
// let userMess = document.querySelector('#zoneA'); //On lie la variable à la div
// console.log(userText); //on verifie que la variable prend bien en compte l'input
// console.log(userMess); //on verifie que la variable prend bien en compte la div
// userText.value="exemple" //on verifie que la valeur du champs change
// userText.addEventListener('keyup',()=>{ //on lui demande pour chaque touche du clavier cliquée:
//     console.log("coucou, ça marche!") //on s'assure que l'addEventListener prend en compte le keyup
//     userMess.innerText = userText.value; //on lui demande de remplir le texte de la div ave la valeur de l'input
// });


//!-----Exo blocage du bouton-----!
//TODO:faire en sorte que le bouton d'envoie se désactive sitot que l'on dépasse 5 caractères dans la zone de texte.
// let bouton = document.querySelector('#bouton'); //On lie la variable à l'imput submit
// let aera = document.querySelector('#aera'); //On lie la variable à la balise <textarea>
// aera.addEventListener('keyup',()=>{ //on lui demande pour chaque touche du clavier cliquée:
//     console.log("event keyup"); //de s'assurer que l'addEventListener prend en compte le keyup
//     console.log(`longueur du texte: ${aera.value.length}`); //de vérifier que l'on arrive à cibler la longueur de la zone de texte et quelle est sa valeur.
//     let longueurText = aera.value.length; // on met la longueur de la balise <textarea> dans une variable
//     if (longueurText>5){
//         bouton.disabled = true; //si elle est supérieur à 5, on désactive l'imput submit
//         bouton.value = "🚫​"; //et on change la valeur de l'input submit pour qu'il affiche un emoticon
//     } else {
//         bouton.disabled = false; // sinon, on laisse l'input submit activé
//         bouton.value = "Envoyer"; //et on change la valeur de l'input submit pour qu'il affiche la valeur de base
//     }
//     console.log(bouton.disabled) // on vérifie l'état de l'input submit
// });


//!-----EXO MARKED DOWN et vanta-----!
//TODO:lier le html à la librairie marked.js et vanta.js, puis vérifier si il la prend bien en compte quand on tape dans la zone de texte et verifier si l'image de la librairie vanta s'affiche bien
// let userText = document.querySelector('#zoneE'); //? On reprend l'exercice zone de texte
// let userMess = document.querySelector('#zoneA'); 
// console.log(userText); 
// console.log(userMess); 
// userText.value="exemple" 
// userText.addEventListener('keyup',()=>{ 
//     console.log("coucou, ça marche!") 
//     userMess.innerHTML = marked(userText.value); //?on lui demande de remplir la div ave la valeur de la zone de texte en prenant en compte la librairie marketjs
// });

// VANTA.CLOUDS({   //?librairie vanta appliquée
//     el: '#container',
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200,
//     minWidth: 200,
//     speed: 1.90
//   });

//?---texte à taper dans le text Area pour vérifier si ça marche (demo marked.js)---!
// Marked - Markdown Parser
// ========================

// [Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

// How To Use The Demo
// -------------------

// 1. Type in stuff on the left.
// 2. See the live updates on the right.

// That's it.  Pretty simple.  There's also a drop-down option above to switch between various views:

// - **Preview:**  A live display of the generated HTML as it would render in a browser.
// - **HTML Source:**  The generated HTML before your browser makes it pretty.
// - **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
// - **Quick Reference:**  A brief run-down of how to format things using markdown.

// Why Markdown?
// -------------

// It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

// > The overriding design goal for Markdown's
// > formatting syntax is to make it as readable
// > as possible. The idea is that a
// > Markdown-formatted document should be
// > publishable as-is, as plain text, without
// > looking like it's been marked up with tags
// > or formatting instructions.

// Ready to start writing?  Either start changing stuff on the left or
// [clear everything](/demo/?text=) with a simple click.

// [Marked]: https://github.com/markedjs/marked/
// [Markdown]: http://daringfireball.net/projects/markdown/
//?---Fin texte à taper dans le text Area pour vérifier si ça marche (demo marked.js)---!


//!-----EXO web storage-----!
//TODO: faire en sorte que ce que l'on tape dans la zone de texte se sauvegarde dans le local storage et puisse etre réutilisé dans le paragraphe même quand on rafraichi la page.
// let monTxt = document.querySelector('#zoneTxt'); //on attribue la zone de texte à la variable monTxt
// let rendu = document.querySelector('#paragraphe'); //on attribue le paragraphe à la variable rendu
// monTxt.value = localStorage.getItem("monSuperTexte"); //chercher la valeur de la clé monSuperTexte (avant de l'avoir défini la première fois) dans la mémoire locale et l'afficher dans ma zone de texte //? ce qui va le réafficher quand on rafraichi la page car on le lui demande avant.
// localStorage.setItem("monSuperTexte",monTxt.value); //définir ma clé monSuperTexte comme ayant pour valeur celle de ma zone de texte.
// if (monTxt.value!=undefined){  //si la valeur de ma zone de texte est définie:
//     rendu.innerText = localStorage.getItem("monSuperTexte"); //afficher dans l'innerText du paragraphe, la valeur de monSuperTexte
// };
// monTxt.addEventListener('keyup',()=>{  //pour chaque touche du clavier qui est relachée:
//     localStorage.setItem("monSuperTexte",monTxt.value); //enregister dans la clé monSuperTexte la valeur de ma zone de texte
//     rendu.innerText = monTxt.value; // afficher dans le paragraphe la valeur de ma zone de texte
// });


//!----EXO API asynchrone-----!
//TODO: comprendre la notion d'API asynchrone grace à l'exemple de l'API pokemon de tyradex
// let imageP = document.getElementsByTagName('img')[0]; //on recupere l'emplacement pour l'image dans le HTML et on lui attribut la variable imageP
// let apiDiv = document.getElementById('apiDiv'); //on récupère le titre H1 et on lui attribut la variable apiDiv

// const contactApiPokemon =  async()=>{ //on fabrique une constante qui sera une fonction asynchrone dans laquelle:
//     const rawData =  await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus') //on récupère et attend les données de la page consacrée à cornvaillus sur l'API de tyradex
//     console.log(rawData); //on vérifie les données brutes que l'on récupère
//     const transformedData = await rawData.json(); //on créé une constante transformedData à laquelle on attribut et attend les données json brutes
//     console.log(transformedData); //on vérifie les données que l'on obtien dans notre constante
//     imageP.src = transformedData.sprites.regular //on en récupère l'image du pokemon que l'on met dans la variable imageP
//     apiDiv.innerText = transformedData.name.fr //on récupère le nom du pokemon que l'on met dans apiDiv
//     apiDiv.innerText += `, pokemon de type: ${transformedData.egg_groups}` //on récupère le type du pokemon que l'on met dans apiDiv
// }

// contactApiPokemon(); //on lance la contante qui se comporte comme une fonction.

//!----EXO fetch API-----!
//TODO:Afficher le nom des 20 premiers pokemons grace à l'API fourni
// let listePok = document.getElementById('container'); //j'attribue la div container à ma variable listePok
// listePok.style.backgroundColor = "lightblue" // je la configure un peu (lui met un background)
// const contactApi = async()=>{ //je créé une constante sous forme de fonction asynchrone que j'appelle contactApi dans laquelle:
//     const rawData = await fetch('https://pokeapi.co/api/v2/pokemon'); //je créé une constante rawData qui prend ses données dans une API et attend sa reponse
//     console.log(rawData); //je vérifie ce à quoi correspond rawData
//     const transData = await rawData.json(); //je créé une constante TransData qui récupère et attend les données bruts en Json
//     console.log(transData); //je vérifie ce à quoi correspond transData
//     for (let i=0;i<transData.results.length;i++){ //Pour chaque tour d'une boucle de la longueur du tableau result de la variable transData:
//         let newLine = document.createElement('div'); //je créé une nouvelle div dans le document que j'apelle newLine
//         newLine.innerHTML = transData.results[i].name; //dans le HTML de newLine, j'écris la valeur de la propriété name de l'objet correspondant à la case i du tableau results de transData
//         listePok.append(newLine); //j'insere newLine dans listePok (la div container)
//     }
// }
// contactApi(); //j'apelle la fonction contactApi

//TODO: la même chose avec la deuxième API fourni (tous les pokemons)
// let listePok = document.getElementById('container'); //j'attribut ma div container à la variable listePok
// listePok.style.backgroundColor = "lightblue"; //je la configure un peu (met le texte au centre, une couleur en fond et change celle du texte)
// listePok.style.textAlign = "center";
// listePok.style.color = "royalblue";
// const contactApi = async()=>{ //je créé une constante sous forme de fonction asynchrone que j'appelle contactApi dans laquelle:
//     const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon'); //je créé une constante rawData qui prend ses données dans une API et attend sa reponse
//     console.log(rawData); //je vérifie ce à quoi correspond rawData
//     const transData = await rawData.json(); //je créé une constante TransData qui récupère et attend les données bruts en Json
//     console.log(transData); //je vérifie ce à quoi correspond transData
//     for (let i=0;i<transData.length;i++){ //Pour chaque tour d'une boucle de la longueur du tableau de la variable transData:
//         let newLine = document.createElement('h3'); //je créé un nouveau titre h3 dans le document que j'apelle newLine
//         newLine.innerText = transData[i].name.fr; //dans le innerText de newLine, j'ecris la valeur de la propriété fr de l'objet name, propriété de l'objet correspondant à la case i du tableau de transData
//         listePok.append(newLine); // j'insère newLine dans listepok (la div container)
//         let newImg = document.createElement('img'); //je créé une nouvelle image dans le document que j'apelle newImg
//         newImg.src = transData[i].sprites.regular;//je lui attribut comme source, la valeur de la propriété regular de l'objet sprite, propriété de l'objet correspondant à la case i du tableau de transData
//         listePok.append(newImg);// j'insère newImg dans listepok (la div container)
//     };
// };
// contactApi(); //j'apelle la fonction contactApi

//TODO: la même chose avec l'API magic
// let listeCard = document.getElementById('container'); //j'attribue la div container à ma variable listeCard
// listeCard.style.backgroundColor = "lightblue" // je la configure un peu ()
// const contactApi = async()=>{ //je créé une constante sous forme de fonction asynchrone que j'appelle contactApi dans laquelle:
//     const rawData = await fetch('https://api.magicthegathering.io/v1/cards'); //je créé une constante rawData qui prend ses données dans une API et attend sa reponse
//     console.log(rawData); //je vérifie ce à quoi correspond rawData
//     const transData = await rawData.json(); //je créé une constante TransData qui récupère et attend les données bruts en Json
//     console.log(transData); //je vérifie ce à quoi correspond transData
//     for (let i=0;i<transData.cards.length;i++){ //Pour chaque tour d'une boucle de la longueur du tableau cards de la variable transData:
//         let newLine = document.createElement('h3'); //je créé un nouveau titre h3 dans le document que j'apelle newLine
//         newLine.innerText = transData.cards[i].name; //je met dans son texte la valeur de la propriété name de l'objet correspondant à la case i du tableau cards de transData
//         listeCard.append(newLine); //j'insère newLine dans listeCard (la div container)
//         let newImg = document.createElement('img'); //je créé une nouvelle image dans le document que j'apelle newImg
//         newImg.src = transData.cards[i].imageUrl; //je lui attribue en source la valeur de la la propriété imageUrl de l'objet correspondant à la case i du tableau cards de transData
//         newImg.alt = "image non disponible"; //je configure le alt de l'image NewImg
//         listeCard.append(newImg);// j'insère newImg dans listeCard (la div container)
//     }
// }
// contactApi(); //j'apelle la fonction contactApi


//!-----Exo classe/instance-----!

//!exemple de classe et instance!
// class UserProfile {
//     //! Pas besoin de déclarer function devant le constructor et méthodes
//     constructor(nameUser, mailUser, phoneUser) { //moule dans lequel on va fabriquer nos gateau
//     //?Attribut en IN MODE indispensable pour créer des new UserProfile
//     this.nameUser = nameUser;
//     this.mailUser = mailUser;
//     this.phoneUser = phoneUser;
//     //?Attribut en outMode ( qui ne sont pas indispensables à la construction de la classe)
//     this.contact = phoneUser + mailUser;
//     this.resume = this.getProfileInfo();
//     //?this._nom = nom;  
//     }
//     getPhone(){
//         return this.phoneUser;
//     }
//     getProfileInfo() {
//     console.log('this ',this);
//     return `infos de l'utilisateur : 
//             son nom : ${this.nameUser}
//             son mail : ${this.mailUser}
//             son Tél : ${this.phoneUser}`;
//     }
// }
// const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252"); // gateau qui va utiliser notre moule créé au dessus
// exampleUser2.getProfileInfo();


//TODO: créer une classe nous permettant de calculer des IMC
// class Imc{ //on construit une nouvelle classe nommée Imc
//     constructor (nomUser,poidUser,tailleUser){ //elle comprend 3 paramètres donnés dans cet ordre
//         this.nomUser = nomUser; //pour chaque instance, le paramettre correspond à son équivalent tel qu'il est décrit dans la déclaration de classe
//         this.poidUser = poidUser;
//         this.tailleUser = tailleUser;
//         this.imc =this.calculImc(); //le parametre imc correspond au return de la fonction calculImc
//     }
//     calculImc(){ //on crée une fonction nommé calculImc dans laquelle:
//         let calcul = (this.poidUser/(this.tailleUser**2)); //la variable calcul est égale au poid/taille² pour l'instance ciblée de la classe Imc
//         return calcul.toFixed(2); // on retourne le résultat de la variable calcul
//     }
//     display(){ //on crée une fonction display dans laquelle:
//         console.log(`${this.nomUser}, votre poid est de ${this.poidUser}kg pour ${this.tailleUser}m. votre IMC est de ${this.imc}`); //on affiche un message de recap pour l'instance
//     }
    
// }
// let list = [ //on utilise la liste de nouvelles instances fournie dans un tableau nommé list
//     new Imc("Sébastien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO ", 300, 2),
//     new Imc("Gontrand ", 90, 1.75),
//     new Imc("Colonel Clock ", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55)
// ];
// list.forEach(element => { //pour chaque élément des cases du tableau list, on va:
//     element.display(); //appliquer la fonction display à l'élément
//     const message = document.createElement('H3'); //créer un nouveau titre H3 dans le document HTML
//     message.innerText = `${element.nomUser}, votre poid est de ${element.poidUser}kg pour ${element.tailleUser}m. votre IMC est de ${element.imc}`; //écrire le message du display
//     document.querySelector('#imc').append(message); //l'insérer dans la div d'id imc du document HTML
// });


//!-----EXO regexp-----!
//TODO: 
// const email = document.querySelector('#email');
// const passwordN = document.querySelector('#password');
// const charDecimal = /\d/;
// const charSpecial = /[$&@!]/;

// email.addEventListener('keyup',()=>{  
//     const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
//     emailRegex.test(email.value);
//     if (emailRegex.test(email.value)){ // pareil que if (emailRegex.test(email.value) == true)
//         email.style.backgroundColor = "green";
//     }
//     else {
//         email.style.backgroundColor = "red";
//     }
// });

// passwordN.addEventListener('keyup',()=>{
//     const charDecimal = /\d/;
//     const charSpecial = /[$&@!]/;
//     password.value.match(charDecimal);
//     password.value.match(charSpecial);
//     console.log(password.value.match(charDecimal),password.value.match(charSpecial))
// });



//!-----EXO -----!
//TODO:faire le bilan comptable de l'entreprise
// console.log('------------------MA PME-----------------');
// class Employee {
//     constructor(nom, prenom, age, salaireMensuel) {
//     this._nom = nom;    
//     this._prenom = prenom;
//     this._age = age;
//     this._salaireMensuel = salaireMensuel;
//     this._cout = this.calculCout();// Calcul cout annuel de l'employé :attribut en outMode
//     }
// // me servira à passer le cout d 1 employé dans la classe PME
//     getCout() {
//         return this._cout;
//     }
// //calcul cout total d 1 salarié
//     calculCout() {    
//     const NB_MOIS_SAL = 12; 
//     const LA_TAXE = 0.9;     
//     //Un léger calcul
//     return this._salaireMensuel * NB_MOIS_SAL * (1 + LA_TAXE );
//     }
// }

// class Pme {
//     constructor(nom, equipe, ventes, coutsFixes, achats) {
//         this._nom = nom;
//         this._equipe = equipe;
//         this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
//         this._ventes = ventes;
//         this._bilan = 0;    // attribut en OutMode a calculer
//     }

//     bilanCalculed () {  
//         console.log(this._equipe);      
//     let cumulEquipe = 0;
//     console.log(`${this._nom} : Cout Initial : ${this._cout}`);

// //Boucle qui parcourt le tableau des salariés (equipe)
// //Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
//     for (let unSalarie of this._equipe){ 
//             cumulEquipe += unSalarie.getCout();
//         }

//     console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
//     //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
//     this._cout += cumulEquipe;
//     console.log(`${this._nom} : VENTES : ${this._ventes}`);

//     this._bilan = this._ventes - this._cout;
//     console.log(`${this._nom} : BILAN : ${this._bilan}`);
//     }
// }

// const pme = new Pme (
// //Le nom entreprise
//     "Ma Petite Entreprise - ", 
//     //L'equipe de salariés (un tableau)
//     [new Employee ("Duval", "Paul", 30, 2000),
//     new Employee ("Durand", "Alain", 40, 3000),
//     new Employee ("Dois", "Sylvia", 50, 4000),],
//     //le revenu , frais fixe, frais d'achat
//     300000,
//     20000,
//     50000);
//     console.log(pme);

// pme.bilanCalculed();


//!-----EXO-----!
//TODO:

