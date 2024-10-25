async function card(){

    try{
        let response = await fetch("http://localhost:3000/api/anime-data");
        let data = await response.json()

        for(let i = 0; i < data.length; i++){
            let cardHTML = `<div class="card">
                <div class="poster">
                    <img src="${data[i].poster}" alt="anime">
                </div>
                <p class="title">${data[i].title}</p>
                <p class="genre">${data[i].genre}</p>
                <p class="episodes">Episodes: ${data[i].episodes}</p>
                <p class="seasons">Seasons: ${data[i].seasons}</p>
            </div>`;
    
            let cardContainer = document.querySelector('.home-container');
    
            cardContainer.innerHTML += cardHTML;
        }
    }
    catch(error){
        console.error(error);
    }
}

card()