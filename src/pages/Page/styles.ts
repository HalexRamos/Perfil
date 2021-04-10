import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 570px;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  background-color: #003662;
  padding: 50px;
`;

export const ProfileImage = styled.div`
  img {
    height: 200px;
    width: 200px;
    padding: 7px;
    background: #fff;
    border-radius: 50%;
    margin-bottom: 10px;
    background: linear-gradient(100deg, #02c0ff, #fff);
  }
`;

export const Name = styled.text`
  font: 25px Roboto, sans-serif;
  color: #fff;
`;

export const Function = styled.text`
  color: #fff;
  font: 10px Roboto, sans-serif;
  margin-bottom: 10px;

  a {
    color: #fff;
    transition: color 0.5s;

    &:hover {
      color: #02c0ff;
    }
  }

  h1 {
    padding: 15px;
  }

  a {
    padding: 15px;
  }
`;

export const SocialMedia = styled.div`
  div {
    margin-top: 30px;

    a {
      color: #fff;
      transition: color 0.5s;
      padding: 10px;
      margin-bottom: 10px;

      &:hover {
        color: #02c0ff;
      }
    }
  }
`;

export const Resume = styled.button`
  background: #fff;
  height: 40px;
  width: 180px;
  border-radius: 4px;
  margin-top: 30px;
  border-width: 2px;
  border-color: #02c0ff;

  &:hover {
    background-color: #02c0ff;
    transition: background-color 0.5s;
  }

  a {
    text-decoration: none;
    font: 15px Roboto, sans-serif;
    color: #003662;
    font-weight: bold;
  }
`;
