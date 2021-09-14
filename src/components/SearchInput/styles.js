import styled from 'styled-components';

export const Container = styled.div`
  input {
    padding: 5px;
    outline: none;
    border: 0;
    border-color: #656565;

    @media (max-width: 481px) {
      padding: 3px;
      width: 120px;
    }
  }
`;