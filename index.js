$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});
const getTrendingMovies = () => {
  for (let i = 0; i < 3; i++) {}
  /*  let imagesSlide = document.getElementById(); */
  /* console.log(imagesSlide); */
  axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=6073902dd4d99a05106002912d0f688a&language=en-US&page=1"
    )
    .then(resp => {
      let eachImgUrl = resp.data.results.slice(0, 5).map((item, index) => {
        return `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
      });
      for (item in eachImgUrl) {
        console.log(item);
        document.getElementById(`trendingposter${item}`).src = eachImgUrl[item];
      }
    });
};
const getTrendingShow = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=6073902dd4d99a05106002912d0f688a"
    )
    .then(resp => {
      /* response from TMDB server */
      console.log(resp);
      let eachImgUrl = resp.data.results.slice(0, 5).map((item, index) => {
        return `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
      });
      for (item in eachImgUrl) {
        console.log(item);
        document.getElementById(`trendingtv${item}`).src = eachImgUrl[item];
      }
    });
};
const getQuotes = () => {
  axios
    .get("https://my-json-server.typicode.com/Easyvipin/FakeRESTAPI/posts")
    .then(resp => {
      /* getting a response from FakeAPI */
      console.log(resp);
      let randomNo = Math.floor(Math.random() * 6);
      console.log(resp.data[randomNo].movie);
      const randomQuotes = () => {
        document.getElementById("movieQuote").innerHTML =
          resp.data[randomNo].movie;
        document.getElementById("quote").innerHTML = resp.data[randomNo].quote;
      };
      randomQuotes();
    });
};
const getToprated = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=6073902dd4d99a05106002912d0f688a&language=en-US"
    )
    .then(resp => {
      let eachImgUrl = resp.data.results.slice(1, 6).map((item, index) => {
        return `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
      });
      for (item in eachImgUrl) {
        console.log(item);
        document.getElementById(`top${item}`).src = eachImgUrl[item];
      }
    });
};
getTrendingMovies();
getTrendingShow();
getToprated();
getQuotes();
