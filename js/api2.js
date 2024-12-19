
const descgame = document.querySelector("#descgame")
const pageGame = document.querySelector("#pageGame")
const icon = document.querySelector("#icon")
const row = document.querySelector("#row")
const navtest = document.querySelector("#navtest")
const nav = document.querySelector("#nav-sec")



const displayGame = async (data) =>{
    
    let box = ``
    box+= `
    <div class="col-md-4">
    
              <div class="about-img ${data.id}" >
              
                <img  src="${data.thumbnail}" class="w-100" alt="">
              </div>
            </div>
            <div class="col-md-8">
              <div class="about-sec">
                <h5>title: <span class="fs-3">${data.title}</span></h5>
              <div class="mb-5">
                <p>Category: <span class="badge bg-info mt-3">${data.genre}</span> </p>
              <p>Platform: <span class="badge bg-info mt-3">${data.platform}</span> </p>
              <p>Status: <span class="badge bg-info mt-3">${data.status}</span> </p>
              <p class="mt-3 p-1 ">${data.description}</p>
              </div>
              <a class=" text-white mt-4" href="${data.game_url}">Show Game</a>
              </div>
            </div>
    
    `
    descgame.innerHTML = box
    
}
const  apiData = async (id) =>{
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '36ce3b219amshd25eb28977d7912p12de2cjsn3fd73e8e189e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        loading.classList.replace("d-none","d-flex")
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    const data = await api.json()
    console.log(apiData);
    
    displayGame(data)
        
    } catch (error) {
        
    }finally{
        loading.classList.replace("d-flex","d-none")
    }
    
}



// apiData(451)

row.addEventListener("click", (e) => {
    // console.log(e.target.getAttribute("data-id"));
    apiData(e.target.getAttribute("data-id"))
    pageGame.classList.replace("d-none" , "d-block")
    row.classList.add("d-none") 
    navtest.classList.add("d-none") 
    nav.style.display = "none"
    
});
icon.addEventListener("click" , ()=>{
    pageGame.classList.add("d-none")
    row.classList.replace("d-none" , "d-flex")
    navtest.classList.replace("d-none" , "d-block")
    nav.style.display = "inline-block"
    
})