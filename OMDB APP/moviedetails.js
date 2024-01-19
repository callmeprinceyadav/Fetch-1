// moviedetails.js
let container = document.getElementById("container")
let API_KEY = "API_KEY"

function backToMoviesPage() {
  location.href = "index.html"
}

function init() {
  let imdbID = localStorage.getItem("imdbID")

  // get the data
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      displayData(res)
    })

  if (imdbID) {
  } else {
    container.innerHTML = ""
    let notFoundDiv = document.createElement("div")
    notFoundDiv.textContent = "IMDB ID Invalid.. Please Check"
    container.append(notFoundDiv)
  }
}

function displayData(movie) {
  container.innerHTML = ""
  let movieCard = document.createElement("div")
  movieCard.className = "card"

  let posterElement = document.createElement("img")
  posterElement.src = movie.Poster

  let titleElement = document.createElement("p")
  titleElement.textContent = "Title  : " + movie.Title

  let yearElement = document.createElement("p")
  yearElement.textContent = "Year : " + movie.Year

  let ratedElement = document.createElement("p")
  ratedElement.textContent = "Rated : " + movie.Rated

  let releasedElement = document.createElement("p")
  releasedElement.textContent = "Released : " + movie.Released

  let runtimeElement = document.createElement("p")
  runtimeElement.textContent = "Runtime : " + movie.Runtime

  let genreElement = document.createElement("p")
  genreElement.textContent = "Genre : " + movie.Genre

  let directorElement = document.createElement("p")
  directorElement.textContent = "Director : " + movie.Director

  let writerElement = document.createElement("p")
  writerElement.textContent = "Writer : " + movie.Writer

  let plotElement = document.createElement("p")
  plotElement.textContent = "Plot : " + movie.Plot

  let languageElement = document.createElement("p")
  languageElement.textContent = "Language : " + movie.Language

  let countryElement = document.createElement("p")
  countryElement.textContent = "Country : " + movie.Country

  let awardsElement = document.createElement("p")
  awardsElement.textContent = "Awards : " + movie.Awards

  let metascoreElement = document.createElement("p")
  metascoreElement.textContent = "Metascore : " + movie.Metascore

  let imdbRatingElement = document.createElement("p")
  imdbRatingElement.textContent = "IMDB Rating : " + movie.imdbRating

  let imdbVotesElement = document.createElement("p")
  imdbVotesElement.textContent = "IMDB Votes : " + movie.imdbVotes

  let typeElement = document.createElement("p")
  typeElement.textContent = "Type : " + movie.Type

  let DVDElement = document.createElement("div")
  DVDElement.textContent = "DVD : " + movie.DVD

  let boxOfficeElement = document.createElement("p")
  boxOfficeElement.textContent = "Box Office  : " + movie.BoxOffice

  let productionElement = document.createElement("p")
  productionElement.textContent = "Production : " + movie.Production

  let websiteElement = document.createElement("p")
  websiteElement.textContent = "Website : " + movie.Website

  let responseElement = document.createElement("p")
  responseElement.textContent = "Response : " + movie.Response

  // append all the element created above to movieCard element

  movieCard.append(
    posterElement,
    titleElement,
    yearElement,
    ratedElement,
    releasedElement,
    runtimeElement,
    genreElement,
    directorElement,
    writerElement,
    plotElement,
    languageElement,
    countryElement,
    awardsElement,
    metascoreElement,
    imdbRatingElement,
    imdbVotesElement,
    typeElement,
    DVDElement,
    boxOfficeElement,
    productionElement,
    websiteElement,
    responseElement
  )

  container.append(movieCard)
}

init()