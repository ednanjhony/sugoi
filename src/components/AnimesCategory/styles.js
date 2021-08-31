import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    margin: 1rem;
    
    a {
      text-decoration: none;
      color: #ffccbc;
      font-weight: bold;
        transition: .2s;

        &:hover {
          color: #ff7043;
        }
    }
  }
`;