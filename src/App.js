import './App.css';
import RowComponent from './RowComponent';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <RowComponent title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <RowComponent title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowComponent title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <RowComponent title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <RowComponent title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <RowComponent title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <RowComponent title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <RowComponent title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;