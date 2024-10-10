let cardMeteo = document.querySelector('.cardMeteo');
let button = document.querySelector('button');
console.log(button)
let info = document.createElement('div');
info.style.height = '300px';
info.style.width = '200px';
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = 'solid, 3px, gray';
info.style.padding = '16px, 12px, 24px, 12px';
cardMeteo.append(info);
cardMeteo.insertBefore(info, button);
console.log(info);


function bouton(){
    button.classList.add('button__cardMeteo');
};


button.addEventListener('mousedown',()=>{
    button.style.backgroundColor = 'orange';
});

button.addEventListener('mouseup',()=>{
    button.style.backgroundColor = "";
    bouton();
});

button.addEventListener('click', ()=>{

    function addInfo(text){
        let newInfo = document.createElement('p'); //je me suis trompé: j'avais mis info.createElement...snif
        newInfo.innerText = text;
        info.append(newInfo);
    
    };

    const contactApi = async()=>{
        const rawData = await fetch('https://prevision-meteo.ch/services/json/toulouse'); 
        const transData = await rawData.json(); 
        console.log(transData); 
        let condi = transData.current_condition;
        addInfo(`condition actuelle: ${condi.condition}`);    
        addInfo(`temperature: ${condi.tmp} deg`);
        addInfo(`maximale: ${transData.fcst_day_0.tmax} deg`);
        addInfo(`minimale: ${transData.fcst_day_0.tmin} deg`);

    };
    contactApi();
});
