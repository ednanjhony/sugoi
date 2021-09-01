import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

 
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;