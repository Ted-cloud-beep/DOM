// const btn=document.querySelector('header button');
// const btn=document.querySelector('header').lastElementChild;
const startAddMovieButton = document.querySelector('header').children[1];
// const addMovieModal=document.querySelector('body').children[1];
// const addMovieModal=document.querySelector('#add-modal');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
// const backdrop=document.body.children[0];
// const backdrop=document.querySelector('div');
//const cancelMovieModal=document.querySelector('.modal__actions').firstChildElement;
//const cancelMovieModal=document.querySelector('.modal__actions').children[0];
const cancleMovieModal = document.querySelector('.btn--passive');
const addMovies = document.querySelector('.btn--success');
const userInputs = document.querySelectorAll('input')
const databaseInfo = document.getElementById('entry-text');
const deleteModal=document.getElementById('delete-modal');
const movies = []
const addMovieModals = () => {
  addMovieModal.classList.add('visible');
  toggleBackDrop();
}
const closeMovieModal=()=>{
  addMovieModal.classList.remove('visible');
}
const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');

}
const backdropClickHandler=()=>{

  closeMovieModal();
  cancelMovieDeletion();
  clearInput();
}

const cancleAddMovie = () => {
  closeMovieModal();
  toggleBackDrop();

}
const clearInput = () => {
  for (let inputs of userInputs) {
    inputs.value = '';
  }
}

const removeDatabaseInfo = () => {
  if (movies.length === 0) {
    databaseInfo.style.display='block';
  } else {
    databaseInfo.style.display = 'none';
  }

}
const renderNewMovieElement = (id,movietitle, imageUrl, rating) => {
  const list = document.createElement('li');
  list.className = 'movie-element';
  list.innerHTML = `<div class="movie-element__image">
    <img src=${imageUrl} alt="image">
  </div>
  <div class="movie-element__info">
    <h2>${movietitle}</h2>
    <p>${rating}/5 stars</p>
  </div>`;
  const movielist=document.getElementById('movie-list');
  movielist.append(list);
  list.addEventListener('click',deleteMovieHandler.bind(null,id))
}
const deleteMovieElement=(movieid)=>{
  let movieIndex=0;
  for (var movieElemets of movies) {
    if(movieElemets.id===movieid){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex,1);
  const movielist=document.getElementById('movie-list');
  movielist.children[movieIndex].remove();
  cancelMovieDeletion();
  removeDatabaseInfo();
  // movielist.removeChild(movielist.children[movieIndex])

}
const cancelMovieDeletion=()=>{
  toggleBackDrop();
  deleteModal.classList.remove('visible');
}
const deleteMovieHandler=(movieid)=>{

  deleteModal.classList.add('visible');
  toggleBackDrop();
  const cancelDeletionMovie=deleteModal.querySelector('.btn--passive');
  let confirmDeletionMovie=deleteModal.querySelector('.btn--danger');
  //deleteMovieElement(movieid);
  confirmDeletionMovie.replaceWith(confirmDeletionMovie.cloneNode(true));
  confirmDeletionMovie=deleteModal.querySelector('.btn--danger');
  confirmDeletionMovie.addEventListener('click',deleteMovieElement.bind(null,movieid));

cancelDeletionMovie.removeEventListener('click',cancelMovieDeletion);
cancelDeletionMovie.addEventListener('click',cancelMovieDeletion);

}
const addMovieHandler = () => {
  const title = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const rating = userInputs[2].value;
  if (title.trim() === '' || imageUrl.trim() === '' || rating <= 0 || rating > 5) {
    alert('Invalid input(rating between 1 and 5)')
    return
  }
  obj = {
    id:Math.random().toString(),
    titleName: title,
    imageUrl: imageUrl,
    ratings: rating
  }



  movies.push(obj);
  console.log(movies);
  clearInput();
  removeDatabaseInfo();
  toggleBackDrop();
  closeMovieModal();
  renderNewMovieElement(obj.id,obj.titleName,obj.imageUrl,obj.ratings);
}

startAddMovieButton.addEventListener('click', addMovieModals)
cancleMovieModal.addEventListener('click', cancleAddMovie)
backdrop.addEventListener('click', backdropClickHandler)
addMovies.addEventListener('click', addMovieHandler)
