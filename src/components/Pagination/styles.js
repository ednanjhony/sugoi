import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 2rem;

  li {
    button {
      border: 0;
      color: #ff7043;
      font-weight: bold;
    }
  }

  li + li {
    margin-left: 1rem;
  }
`;