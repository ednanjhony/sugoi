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

  @media(max-width: 801px) {
    button {
      font-size: 10px;
      margin-left: 0;
      padding: 0;
    }
  }
`;

export const RadioBox = styled.button`
  padding: .5rem;
  margin-right: 1rem;
  border: 0;
  color: #ff7043;
  font-weight: bold;

  background: ${(props) => props.isActive ? '#ffccbc' : 'transparent'}
`;

export const AnimeContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AnimesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  list-style: none;
  margin: 0 auto;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media(max-width: 801px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    img {
      width: 60px;
      height: 80px;
    }
  }

  @media(max-width: 600px) {
    grid-template-columns: repeat(1, fr);
  }

  h4 {
    color: #ff7043;
    text-align: center;
  }
`;