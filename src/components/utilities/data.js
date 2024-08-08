const searchHandler = (arr, term) => {
  if (!term) {
    return arr;
  }

  return arr.filter((item) =>
    item.movieName.toLowerCase().includes(term.toLowerCase())
  );
};

const filterHandle = (arr, filter) => {
  switch (filter) {
    case "popular":
      return arr.filter((movie) => movie.like);
    case "mostWatched":
      return arr.filter((movie) => movie.viewers > 900);
    default:
      return arr;
  }
};

export { searchHandler, filterHandle };
