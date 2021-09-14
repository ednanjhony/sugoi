import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
      
      @media (max-width: 768px) {
        font-size: 12px;
        margin: 0 .5rem;
      }

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
  }
`;