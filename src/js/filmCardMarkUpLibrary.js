export const markupFilmCardLibrary = function (array) {
  function getGenr(array) {
    return array
      .map(el => el.genres
      .map(genre => genre.name)
    );
  }
  

  return array
    .map(film => {
      const {
        id,
        poster_path,
        original_title,
        genre_ids,
        release_date,
        vote_average,
        backdrop_path,
      } = film;

      let genreStr = null;

      let arrGenres = getGenr(array);
      // console.log(arrGenres);
      for (i = 0; i < arrGenres.length; i++){
        // console.log(arrGenres[i]);
        genreStr = prepareObject(arrGenres[i]);
      }

      function prepareObject(array) {
        let filmGenres = '';

        if (array.length < 3) {
          filmGenres = array.join(', ');
        }
        if (array.length >= 3) {
          filmGenres = array.slice(0, 2).join(', ') + ', Other';
        }
        return filmGenres;
      }
      console.log(array.length);
      let line = "|";
      if (genreStr.length === 0){
        line = "";
      }

      return `  
    <li class="card-library__item" data-id="${id}">
      <img class="card-library__photo" src="https://image.tmdb.org/t/p/original/${poster_path}" alt=${original_title} width="395"/>
      <div class="card-library__wrap">
        <h3 class="card-library__title">${original_title}</h3>
        <div class="card-library__info">
          <p class="card-library__text">
            ${genreStr} <span class="card-library__line">${line}</span> <span class="card-library__year">${release_date.slice(
        0,
        4
      )}</span>
          </p>
          <span class="card-library__rate">${vote_average.toFixed(1)}</span>
        </div>
      </div>
    </li>`;
    })
    .join('');
};
