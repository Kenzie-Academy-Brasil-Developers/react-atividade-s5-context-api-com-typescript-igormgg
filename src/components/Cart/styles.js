import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h5 {
    font-size: calc(16px + 1vw);
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    li {
      width: 300px;
      border: 1px solid black;
      padding: 10px;
      background-color: white;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 5px;

      h2 {
        font-weight: bold;
      }

      h4 {
        font-weight: bold;
      }

      button {
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-family: inherit;
        font-size: 16px;

        :hover {
          cursor: pointer;
          filter: brightness(0.9);
        }
      }

      img {
        max-height: 200px;
      }
    }
  }
`;
