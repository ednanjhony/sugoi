import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  background: #eeeeee;

  .search-content {
    display: flex;

    button {
      background: #fff;
      border-left: 0;
      outline: none;
      padding: 0 1rem;
    }
  }
;
  

  .nav {
    width: 100%;
    margin: 0 1rem;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-top: 1rem;
  }
`;

export const List = styled.ul`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  list-style: none;

 
`;

export const Content = styled.main`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Box = styled.div`
  width: 50%;
  background: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin: 1rem auto;
    color: #ff7043;
  }
`;