window.addEventListener('load', ()=> {
    let coord = document.querySelector('.coords p');
    let pers = document.querySelector('.persons p');

    const apipers = 'http://api.open-notify.org/astros.json';
    const apicoord = 'http://api.open-notify.org/iss-now.json';

    fetch(apipers)
        .then(respers => {
            return respers.json();
        })
        .then(datapers =>{
            console.log(datapers);
            const persone = datapers.number;
            pers.textContent = persone
        });
    
    fetch(apicoord)
        .then(respco => {
            return respco.json();
        })
        .then(dataco =>{
            console.log(dataco);
            const {latitude,longitude} = dataco.iss_position;
            coord.textContent = latitude+";"+longitude;
        });
    
});