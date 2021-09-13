import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  list-style: none;
  margin: 1rem auto;
  padding: 1rem;

  li {
    button {
      border: 0;
      color: #ff7043;
      font-weight: bold;
      padding: .5rem;
    }

    .active {
        background: #ffccbc;
      }

      

  }

  li + li {
    margin-left: 1rem;
  }
`;