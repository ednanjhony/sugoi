import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi'

import Modal from 'react-modal';

import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { SearchInput } from '../../components/SearchInput';
import { BoxImage } from '../../components/BoxImage';
import { Divider } from '../../components/Divider';

import { Container, Header, List, Content, Box} from './styles';
import { AnimeOfWeek } from '../../components/AnimeOfWeek';

export function Home() {
  const [ animeInfo, setAnimeInfo ] = useState({});
  const [ animes, setAnimes ] = useState('');
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  console.log(animes)

  useEffect(() => {
    if (animes) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animes}`)
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
      >
        { animeInfo.data && (
        <List>
          {animeInfo.data.map(anime => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.tiny} alt="animes" />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </List>
      )}
      </Modal>

      <Content>
				<Box>
					<h2>Welcome, We hope you enjoy your favorite anime.</h2>

					<BoxImage />

					<Divider />

          <AnimeOfWeek />
				</Box>
			
      </Content>
      
    </Container>
  );
}