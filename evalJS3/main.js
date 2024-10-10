// let listePok = document.getElementById('container'); 
// listePok.style.backgroundColor = "lightblue"; 
// listePok.style.textAlign = "center";
// listePok.style.color = "royalblue";

// const contactApi = async()=>{ 
//     const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon'); 
//     console.log(rawData); 
//     const transData = await rawData.json(); 
//     console.log(transData); 
//     for (let i=0;i<transData.length;i++){ 
//         let newLine = document.createElement('h3'); 
//         newLine.innerText = transData[i].name.fr; 
//         listePok.append(newLine); 
//         let newImg = document.createElement('img'); 
//         newImg.src = transData[i].sprites.regular;
//         listePok.append(newImg);
//     };
// };
// contactApi(); 
let cardMeteo = document.querySelector('#cardMeteo')
let info = document.createElement('div');

info.innerHTML = 'zazazazazaza'

info.style.height = '300px';
info.style.width = '200px';
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = 'solid, 3px, gray';
info.style.padding = '16px, 12px, 24px, 12px';
cardMeteo.append(info);