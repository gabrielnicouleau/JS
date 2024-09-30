// exo 1
console.log("hello world");
alert("A que coucou!");

// suite cours
let variable="Hello";
const myConstante = "je suis une constante";
variable=3;
// myConstante=7; ---> une constante ne peut être réatribuée.
console.log(variable,myConstante);

// exo 2
let myVariable = "je suis une variable";
console.log(myVariable);

// exo 3
let a=5;
let b=8;
let c=a
a=b;
b=c;
console.log(a,b);

// exo 4
let A=4;
let B=1;
let C=8;

let moyenne = (A+B+C)/3;
console.log(moyenne);

// exo bonus 1
console.log(moyenne.toFixed(2));
//arondi moyenne à 2 chiffres après la virgule 

// exo bonus 2
let temp1=A
let temp2=B
A=C;
B=temp1;
C=temp2;
console.log(A,B,C);

// exo 5
let prenom = "Gabriel";
let nom = "Nicouleau";
let nomComplet = prenom + " " + nom;
// on peux concaténer des espaces entre des mots, tout comme des variables.
console.log(nomComplet);
console.log(nomComplet.length);

// exo 6
let age = 34;
let phrase = `Bonjour ${prenom}, tu as ${age} ans.
"Félicitations!!!"`;
// ${} permet d'intégrer des variables dans notre chaine.

console.log(phrase);
console.log(phrase[0]);

// exo 7
console.log(phrase.replace("Félicitation","Bravo"))
// remplace des charactères par d'autres.

// exo 8
let phrase2 = "bienvenue dans le monde du développemenbt web";
console.log(phrase2.slice(0,9));
// récupère le mot "bienvenue" (du charactère 0 à 8).

// exo 9
console.log(phrase2.split(" "));
// ==>divise la chaine en sous-chaines dans un tableau (à chaque espace, donc phrase==>mots).

//  exo10
let number1=5;
let number2=7;
let somme= number1+number2;
console.log(somme);

// exo 11
let longueur=10;
let largeur=8;
let perimetre= (longueur+largeur)*2;
let aire= longueur*largeur;
console.log("le périmètre est de "+perimetre+"m et l'aire est de "+aire+"m²");

// exo 12
let note1=12.5;
let note2=15.75;
let note3=17;
let moyenneNotes=((note1+note2+note3)/3).toFixed(2);
// arrondi au deuxième chiffre après la virgule.
console.log(moyenneNotes);

// exo 13
console.log(Math.floor(moyenneNotes));
// math.floor(x) arrondi au nombre entier en dessous de x.

// exo Bonus 3
let prix = 85;
let pourboire = 15;
let prixTotal = prix+(prix*pourboire/100);
console.log(prixTotal);

// exo 14
let Nombre = prompt("choisir un nombre")
if(Nombre>0){
    console.log("le nombre est positif"); //exo 15
} else if (Nombre<0){
    console.log("le nbombre est negatif"); //exo 16
} else {
    console.log("ce nombre vaux zéro");
}

// exo 17
let demande1 = prompt("choisir un premier nombre");
let demande2 = prompt("choisir un deuxième nombre");
if (demande1>demande2){
    console.log(demande1);
} else if (demande2>demande1){
    console.log(demande2);
} else{
    console.log("Les deux nombres sont égaux");
}

//exo 18
let note = parseInt(prompt("Entrez une note entre 0 et 5 :"));
switch(note){
    case 0:
        console.log("Très insuffisant");
        break;
    case 1:
        console.log("Insuffisant");
        break;
    case 2:
        console.log("Passable");
        break;
    case 3:
        console.log("Assez bien");
        break;
    case 4:
        console.log("Bien");
        break;
    case 5:
        console.log("Très bien");
        break;
    default:
        console.log("cette note n'est pas comprise entre 0 et 5");
        break;
}

// // exo Bonus 4
// let nMystere = (Math.random())*100;
// let tentative = prompt("tentez de trouver le nombre mystère (entre zéro et 100)");
// if(tentative==Math.floor(nMystere)){
//     console.log("Vous avez gagné");
// }
// while (tentative!=Math.floor(nMystere))
//     if (Math.floor(nMystere)>tentative){
//         tentative = prompt("c'est plus");
//     } else if (Math.floor(nMystere)<tentative){
//         tentative = prompt("c'est moins");
//     } 
// if(tentative==Math.floor(nMystere)){
//     console.log("Bravo! Vous avez gagné");
// }

// exo 19
let tab = [10,2,64];
console.log(tab[0]);
tab.push(5);
tab.shift();
console.log(tab);

// exo 20
let semaine = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
console.log("Une semaine dure "+semaine.length+" jours.");

// exo Bonus 5
let couleur = ["rouge","vert","bleu"];
let testCouleur = prompt("saisir une couleur");
if (couleur.includes(testCouleur)){
    console.log("La couleur est dans le tableau");
} else {
    console.log("La couleur n'est pas dans le tableau");
}

// exo Bonus 6
let Notes = [12,15,8,19,7];
let sommeNotes=0;
let moyNotes=0;
for (let i=0;i<Notes.length;i++){
    sommeNotes += Notes[i];
    moyNotes = sommeNotes/i;
}
console.log(moyNotes);

