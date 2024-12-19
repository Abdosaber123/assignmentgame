
const loading = document.querySelector("#loading")
const button = document.querySelectorAll("ul li a")



const displayApi = (list)=>{
let cartona = ``
for( let i = 0 ; i < list.length ; i++){
    
    cartona += `
    <div data-id="${list[i].id}" class=" col-md-3 border test-hover border-1 border-black border-opacity-25 pt-3 pb-1 rounded-3 ">
    <p data-id="${list[i].id}" class="text-white"></p>
                    <div data-id="${list[i].id}" class="inner layer  overflow-hidden p-1">
                        <img data-id="${list[i].id}" src="${list[i].thumbnail}" class="rounded-2 w-100"  alt="">
                        <div class="d-flex justify-content-between text-white mt-2">
                            <h3 data-id="${list[i].id}" >${list[i].title}</h3>
                            <p data-id="${list[i].id}" class=""><span>free</span></p>
                        </div>
                        <p data-id="${list[i].id}" class="opacity-50 text-white text-center border-bottom border-black border-opacity-25 p-2">${list[i].short_description}</p>
                        
                        <div data-id="${list[i].id}"  class="d-flex justify-content-between  text-white m-0 border-top border-black border-opacity-50 p-2 ">
                            <p data-id="${list[i].id}" class="badge bg-dark">${list[i].genre}</p>
                            <p data-id="${list[i].id}"  class="badge bg-dark">${list[i].platform}</p>
                        </div>
                    </div>
                </div>
    
    `
}

row.innerHTML = cartona
}






const  Apidata = async (q) =>{

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '36ce3b219amshd25eb28977d7912p12de2cjsn3fd73e8e189e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    try {
        loading.classList.replace("d-none","d-flex")
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${q}` , options)
    const response = await api.json()
    displayApi(response)
    
    } catch (error) {
        
    }finally{
        loading.classList.replace("d-flex","d-none")

    }


}



for(let i = 0 ; i < button.length ; i++){
    button[i].addEventListener("click", (e)=>{
        Apidata(e.target.getAttribute("data-q"))
    })
}


