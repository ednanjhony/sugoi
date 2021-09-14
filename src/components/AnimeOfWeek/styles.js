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
      text-align: center;

      @media (max-width: 920px) {
        font-size: 16px;
        margin: .5rem;
      }
    }
  }

  .anime {
    display: flex;
    width: 95%;
    margin-top: 3rem;
    background: #ff7043;
    padding: 1rem;

    @media(max-width: 481px) {
      flex-direction: column;   

      a {
        img {
          width: 100%;
          height: 100px;
          object-fit: cover;
        }
      }
    }

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