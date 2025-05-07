document.getElementById('addmovie').addEventListener('click',addMovie)
document.getElementById('clearMovie').addEventListener('dblclick', clearMovie)
function addMovie(){
    let title = document.getElementById('title').value
    let publisher = document.getElementById('publisher').value
    let image = document.getElementById('URL').value

    if(title == ''|| publisher == '' || image == ''){
        alert(`please fill in all fields`)
        return
    }
    let div = document.createElement('div')
    div.classList.add('movieItem')
    div.innerHTML= `<img src="${image}" alt="" class="imageItem" >
<div class="para">
<p class="movieName">${title}</p>
<p class="publisher">by${publisher}</p>
</div>`
document.getElementById('movieList').appendChild(div)
let movie = {
    movieTitle : title,
    moviePublisher : publisher,
    imageURL : image
}
addToList(movie)

let movies = JSON.parse(localStorage.getItem('movies'))|| []
movies.push(movie)
localStorage.setItem('movies', JSON.stringify(movies))
console.log(movie);

document.getElementById('title').value =''
document.getElementById('publisher').value =''
document.getElementById('URL').value=''
}
function showMovies(){
    let movies = JSON.parse(localStorage.getItem('movies'))
    for(let i = 0; i<movies.length; i++){
        addToList(movies[i])
}
}
function addToList(movie){
    let movies = JSON.parse(localStorage.getItem('movies'))
    for(let i = 0; i<movies.length; i++){
        let div = document.createElement('div')
        div.classList.add('movieItem')
        div.innerHTML= `<img src="${movie.movieImage}" alt="Error Loading Image" class="imageItem" width=90px>
    <div class="para">
    <p class="movieName">${movie.movieTitle}</p>
    <p class="publisher">by${movie.moviePublisher}</p>
    </div>`
    document.getElementById('movieList').appendChild(div)  
    } 
}
showMovies()
function clearMovie(){
    localStorage.removeItem('movies')
    document.getElementById('movieList').innerHTML=''
}


