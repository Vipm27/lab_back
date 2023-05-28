import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import Search from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('terminator');
  useEffect(() => {
    if (value) {
      fetch("http://www.omdbapi.com/?apikey=c8ed8ebe&s="+(value))
        .then(res => res.json())
        .then(data => {
          if (data.Response === "True") {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        })
    }else{
      fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=terminator&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
    }
  }, [value]);
  
  return (
    <>
    <Search onChangeFunc={(event) => setValue(event.target.value)}/>
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {
              movies.length ?
                <Movies movies={movies} />
                : <h1>Loading...</h1>
            }
          </Row>
        </Col>
      </Row>
      </>
)
}
export default Main;