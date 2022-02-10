const grid = document.querySelector('.grid')
const input = document.getElementById('input')
const search = document.getElementById('search')
const image = document.querySelectorAll('.img')

let url = 'https://api.unsplash.com/search/photos/?query=london&per_page=40&client_id=Y3l-pT8g6Q0KRX5vMSpLS-SIc1RFjcdGkLcdrQAkXVo'
// рандомные картинки с Лондоном


//отработка поиска
input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
    searchImage()
})


search.addEventListener('click', searchImage)


//вызываю функцию с рандомными картинками
async function getData () {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    
    let elem = document.querySelectorAll('.img')
    elem.forEach(el => el.remove())
        for (let i=0; i< data.results.length; i++){
            const img = document.createElement('div')
            img.classList.add('img')
            img.style.backgroundImage = 'url('+data.results[i].urls.regular+')'
            grid.append(img)
            img.addEventListener('mouseenter', () => {
                img.classList.add('big-img')
               
            })
            img.addEventListener('mouseleave', () => {
                img.classList.remove('big-img')
            })
            
        }
        //data.forEach((el) => el.addEventListener('click'), () => data.classList.toggle('big-img'))


}
getData();


//Посик картинок
function searchImage(){
    url = 'https://api.unsplash.com/search/photos/?query=' +input.value+ '&per_page=15&client_id=Y3l-pT8g6Q0KRX5vMSpLS-SIc1RFjcdGkLcdrQAkXVo';
    getData()
}


//Добавление картинки
// function showData (data){
//     for (let i=0; i< data.results.length; i++){
//         const img = document.createElement('div')
//         img.classList.add('img')
//         img.style.backgroundImage = 'url('+data.results[i].urls.regular+')'
//         grid.append(img)

//     }
// }
// async function loadImg () {
//     removeImg();

//     const url = 'https://api.unsplash.com/search/photos/?query=' +input.value+ '&per_page=15&client_id=Y3l-pT8g6Q0KRX5vMSpLS-SIc1RFjcdGkLcdrQAkXVo'

//     let response = await fetch (url)
//     let content = response.json()
//     //console.log(content)
   
//     content.then(data =>{
//         // const imageNodes = [];
//         for (let i=0; i< data.results.length; i++){
//             const img = document.createElement('div')
//             img.classList.add('img')
//             img.style.backgroundImage = 'url('+data.results[i].urls.regular+')'
//             //console.log(data.results[i].urls.regular)
//             console.log(img)
//             grid.append(img);
//         }
//     })
// }
   

    
    // let key;
    // for (key in content) {
    //     const img = document.createElement('div');
    //     img.classList.add('img')
    //     img.style.backgroundImage = 'url('+content[key].urls.regular+')'
    //     // `${content[key].urls.regular}`
    //     grid.appendChild(img);
        
    // }


function removeImg () {
    grid.innerHTML = '';
}