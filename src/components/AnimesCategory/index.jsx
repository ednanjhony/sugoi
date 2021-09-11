import { useEffect, useState } from 'react';
import { Divider } from '../Divider';
import { Pagination } from '../Pagination';
import { 
  Container, 
  Categories, 
  AnimesList, 
  RadioBox,
  AnimeContainer
} from './styles';

const LIMIT = 12;


export function AnimesCategory() {
  const [ animesCategory, setAnimesCategory ] = useState({});
  const [ type, setType ] = useState('all');
  const [ offset, setOffset ] = useState(0);



  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${type}&page[limit]=${LIMIT}`)
      .then((response) => response.json())
      .then((response) => {
        setAnimesCategory(response)
        console.log(response)
      })
  }, [type])

  return (
    <Container>
      <Categories>

        <RadioBox
          type="button"
          onClick={() => { setType('all') }}
          isActive={type === 'all'}
        >
          All
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => { setType('adventure') }}
          isActive={type === 'adventure'}
        >
          Adventure
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => { setType('seinen') }}
          isActive={type === 'seinen'}
        >
          Seinen
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => { setType('shoujo') }}
          isActive={type === 'shoujo'}
        >
          Shoujo
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => { setType('Shounen') }}
          isActive={type === 'Shounen'}
        >
          Shounen
        </RadioBox>
      </Categories>

      <Divider />

      <AnimeContainer>
        {animesCategory.data && (
        <AnimesList>
          {animesCategory.data.map(anime => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.tiny} alt={anime.attributes.canonicalTitle} />
              <h4>{anime.attributes.canonicalTitle}</h4>
            </li>
          ))}
        </AnimesList>
        )}

        {animesCategory.meta && (
          <Pagination 
            limit={LIMIT} 
            total={animesCategory.meta.count} 
            offset={offset}
            setOffset={setOffset} 
          />
        )}
      </AnimeContainer>

      
      
      
    </Container>
  )
}