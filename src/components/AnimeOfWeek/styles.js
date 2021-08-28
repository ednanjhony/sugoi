import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .message {
    

    h3 {
      color: #ff7043;
      font-weight: bold;
    }
  }

  .anime {
    display: flex;
    width: 95%;
    margin-top: 3rem;
    background: #ff7043;
    padding: 1rem;

    a {
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }
    }

    span {
      display: flex;
      align-items: center;
      text-align: center;
      color: #424242;
      font-weight: bold;
    }
  }
`;