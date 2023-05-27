import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movie from '../components/Movie';
import Search from '../components/Search';

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s={}&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }, []);

  const [value, setValue] = useState('')

  const filteredPlants = movies.filter( movie => {
      return movie.Title.toLowerCase().includes(value.toLowerCase())
  })
  
  return (
    <>
    <Search onChangeFunc={(event) => setValue(event.target.value)}/>
    <Layout.Content>
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
                {
                    filteredPlants.map((movie) => {
                        return(
                            <Movie key={movie.imdbID} {...movie} />
                        )
                    })
                }

          </Row>
        </Col>
      </Row>
    </Layout.Content>
    </>
  );
};

export default Main;