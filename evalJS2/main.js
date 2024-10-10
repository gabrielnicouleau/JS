import './style.css'

class CompteBanquaire{
  constructor(name, solde){
    this._name = name;
    this._solde = solde;
  };

  retirer(somme){
    if (this._solde>=somme){
      this._solde -= somme;
      console.log(`${this._name}, vous avez retiré ${somme}€`)
      return this._solde;
    } else {
      console.log(`${this._name}, le solde de votre compte est insuffisant(${this._solde}€),
        votre retrait de ${somme}€ a été refusé.`);
      return this._solde;
    };
  };

  virement(somme, CompteBanquaire){
    if (this._solde>=somme){
      this._solde -= somme;
      CompteBanquaire._solde+= somme;
      console.log(`${this._name}, vous venez de virer ${somme}€ sur le compte de ${CompteBanquaire._name}`)
      console.log(`${CompteBanquaire._name}, votre compte vient d'être crédité de ${somme}€`)
      return this._solde, CompteBanquaire._solde;
    } else {
      console.log(`${this._name}, le solde de votre compte est insuffisant`);
      return this._solde;
    };
  };

  crediter(somme){
    this._solde+= somme;
    console.log(`${this._name}, votre compte a été crédité de ${somme}€`);
    return this._solde;
  }

};
let Alex = new CompteBanquaire ("Alex", 0);
let Clovis = new CompteBanquaire("Clovis",0);
let Marco = new CompteBanquaire ("Marco", 0);

let lesCompte = [Alex,Clovis,Marco];
console.log(lesCompte);
console.log(Alex,Clovis,Marco);

lesCompte[0].crediter(1000);
lesCompte[1].crediter(1000);
lesCompte[2].crediter(1000);
lesCompte[0].retirer(100);
lesCompte[2].virement(300,lesCompte[1]);
lesCompte[0].retirer(1200);
console.log(`titulaire: ${Alex._name}, solde: ${Alex._solde}`);
console.log(`titulaire: ${Clovis._name}, solde: ${Clovis._solde}`);
console.log(`titulaire: ${Marco._name}, solde: ${Marco._solde}`);



// class Livre{
//   constructor(titre,auteur,disponible){
//     this.titre = titre;
//     this.auteur = auteur;
//     this.disponible = disponible;
//   };

//   emprunter(){
//     if (this.disponible = true){
//     this.disponible = false;
//     return this.disponible;
//     } else {
//       console.log(`vous ne pouvez pas emprunter ce livre`);
//     }
//   };

//   retourner(){
//     if (this.disponible = false){
//     this.disponible = true;
//     } else {
//       console.log (`ce livre ne fait pas parti de notre bibliotheque`);
//     }
//   };

//   afficherDispo(){
//     if (this.disponible = true){
//       console.log(`le livre ${this.titre}, de l'auteur ${this.auteur}, est disponible`)
//     } else {
//       console.log(`le livre ${this.titre}, de l'auteur ${this.auteur}, n'est pas disponible actuellement`)
//     }
//   };

// };

// class bibliothèque{
//   constructor (nom, livres){
//     this.nom = nom;
//     this.livres = livres;
//   };

//   ajouterLivre(livre){
//     livre = Livre.titre;
//     new bibliothèque.livres += Livre;
//   }

//   emprunterLivre(livre){
//     livre = livre.titre;
//     emprunter();

//   };

//   retournerLivre(livre){
//     livre =livre.titre;
//     retourner();
//   }
// };