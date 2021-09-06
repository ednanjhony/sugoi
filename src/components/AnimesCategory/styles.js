import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
 
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;

 
`;

export const RadioBox = styled.button`
  padding: .5rem;
  margin-right: 1rem;
  border: 0;
  color: #ff7043;
  font-weight: bold;

  background: ${(props) => props.isActive ? '#ffccbc' : 'transparent'}
`;

export const AnimesList = styled.ul`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  list-style: none;
  margin: 0 auto;

  h4 {
    color: #ff7043;
    text-align: center;
  }
`;