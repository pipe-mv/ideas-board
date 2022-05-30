import styled from "styled-components";

export const StyleIdeaHeader = styled.div`
  button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
    background-color: #61dafb;
    color: white;
    transition: 0.3s;
  }
  button:hover {
    background-color: #61dafc;
    border: 2px solid white;
    color: white;
    transition: 0.4s;
  }
`;

export const StyledIdeaBoard = styled.div`
  background: ${(props) => props.backgroundColor};
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
`;
export const StyledIdea = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  width: 20%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 1em;
  padding: 1em;
  position: relative;

  input,
  textarea {
    width: auto;
    height: 40px;
    margin: 4px 0;
    padding: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 10px;
    margin-right: 10px;
    border: 0;
    cursor: pointer;
    background: #f5ba13;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
