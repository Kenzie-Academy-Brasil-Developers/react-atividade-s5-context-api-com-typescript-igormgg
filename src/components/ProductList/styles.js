import styled from "styled-components";

export const ProductListContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      max-width: 300px;
      max-height: 500px;

      img {
        max-height: 200px;
      }
    }
  }
`;
