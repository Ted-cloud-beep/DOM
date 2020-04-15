// const btn=document.querySelector('header button');
// const btn=document.querySelector('header').lastElementChild;
const startAddMovieButton=document.querySelector('header').children[1];
// const addMovieModal=document.querySelector('body').children[1];
// const addMovieModal=document.querySelector('#add-modal');
const addMovieModal=document.getElementById('add-modal');
 const backdrop=document.getElementById('backdrop');
 // const backdrop=document.body.children[0];
// const backdrop=document.querySelector('div');
//const cancelMovieModal=document.querySelector('.modal__actions').firstChildElement;
//const cancelMovieModal=document.querySelector('.modal__actions').children[0];
const cancleMovieModal=document.querySelector('.btn--passive');
const addMovies=document.querySelector('.btn--success');
const userInputs=document.querySelectorAll('input')
const movies=[]
const toggleMovieModal=()=>{
  addMovieModal.classList.add('visible');
  backdrop.classList.add('visible');
}

const toggleBackDrop=()=>{
  backdrop.classList.toggle('visible');
  addMovieModal.classList.toggle('visible');
}
const cancleAddMovie=()=>{
  toggleBackDrop();
}
const clearInput=()=>{
  for (let inputs of userInputs) {
    inputs.value='';
  }
}
const addMovieHandler=()=>{

  const title=userInputs[0].value;
  const imageUrl=userInputs[1].value;
  const rating=userInputs[2].value;
  if(title.trim()==='' || imageUrl.trim()==='' || rating<=0 ||rating>5){
    alert('Invalid input(raating between 1 and 5)')
    return
  }
  obj={titleName:title,
    imageUrl:imageUrl,
    ratings:rating
  }



  movies.push(obj);
  console.log(movies);
  clearInput();
  toggleBackDrop();
}

startAddMovieButton.addEventListener('click',toggleMovieModal)
cancleMovieModal.addEventListener('click',cancleAddMovie)
backdrop.addEventListener('click',toggleBackDrop)
addMovies.addEventListener('click',addMovieHandler)
