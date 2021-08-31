import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 800px;
    max-width: 1000px;
    background: #eeeeee;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    overflow: hidden;    
    overflow-y: auto;

    h4 {
      color: #ff7043;
      text-align: center;
    }
  }
`;