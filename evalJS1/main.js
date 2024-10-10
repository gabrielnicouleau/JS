// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const contactApi =  async () => {
  //Data va récup Toutes les données de l'api
  const response = await fetch('https://randomuser.me/api/');
  console.log(response);
  console.log(response.ok);
  console.log(response.status);
  //Plutôt que de Travailler sur la réponse, on va la transformé pour 
  const dataTransformed = await response.json();
  console.log(dataTransformed);
  const profil = document.querySelector("#userCard")

  const image = document.createElement("img");
  image.src = dataTransformed.results[0].picture.large;
  profil.append(image);
  
  const div = document.createElement('div');
  div.class = "card-body";
  profil.append(div);


  const name = document.createElement('h5');
  name.innerText = `${dataTransformed.results[0].name.title} ${dataTransformed.results[0].name.first} ${dataTransformed.results[0].name.last}`
  name.class = "card-title";
  div.append(name);

  const email = document.createElement('p')
  email.innerText = dataTransformed.results[0].email;
  email.class="card-text";
  div.append(email);

  const adresse = document.createElement('p') 
  adresse.innerText = `adresse: ${dataTransformed.results[0].location.street.number} ${dataTransformed.results[0].location.street.name}, ${dataTransformed.results[0].location.postcode} ${dataTransformed.results[0].location.city}, ${dataTransformed.results[0].location.country}`;
  adresse.class="card-text";
  div.append(adresse);

  const tel = document.createElement ('P')
  tel.innerText = `phone: ${dataTransformed.results[0].phone}`;
  tel.class="card-text";
  div.append(tel);

  let button = document.createElement ('a');
  button.innerText = "Random User";
  button.class = "btn btn-primary";
  button.href = "#";
  button.style.borderRadius = "3px";
  button.style.color ="white";
  button.style.backgroundColor = "lightblue";
  button.style.padding = "5px";
  div.append(button);

  button.addEventListener("click",()=>{});
  
};


contactApi();



