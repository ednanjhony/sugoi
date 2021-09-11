import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { SearchInput } from '../../components/SearchInput';
import { Container, List, Header, Content, Box } from './styles';

import Modal from 'react-modal';
import { Divider } from '../../components/Divider';
import { AnimesCategory } from '../../components/AnimesCategory';


export function Animes() {
  const [ animeInfo, setAnimeInfo ] = useState({});
  const [ animes, setAnimes ] = useState('');
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  

  useEffect(() => {
    if (animes) {
      fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${animes}`
      )
        .then((response) => response.json())
        .then((response) => {
          setAnimeInfo(response)
          console.log(response)
        });
    }
  }, [animes])

  return (
    <Container>
      <Header>
        
        <div className="nav">
          <Logo />

          <Navigation />

          <div className="search-content">
            <SearchInput 
              value={animes} 
              onChange={(search) => setAnimes(search)} 
            />
            <button onClick={handleOpenModal}>
              <FiSearch />
            </button>
          </div>
          
        </div>
        
        <img 
          src="https://omnitos.com/wp-content/uploads/2021/08/personajes-de-tokyo-revengers-8137-scaled.jpg" 
          alt="wallpaper" 
        />
      </Header>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        { animeInfo.data && (
        <List>
          {animeInfo.data.map(anime => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.tiny} alt="animes" />
              <h4>{anime.attributes.canonicalTitle}</h4>
            </li>
          ))}
        </List>
      )}
      </Modal>

      <Content>
				<Box>
					<h2>Categories</h2>

					<Divider />
          
          <AnimesCategory />

				</Box>

			
      </Content>
      
      
    </Container>
  );
}