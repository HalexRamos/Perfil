import React from 'react';

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';

import { IoLogoWhatsapp } from 'react-icons/io';

import { FaNodeJs } from 'react-icons/fa';

import { GrReactjs } from 'react-icons/gr';

import { SiTypescript } from 'react-icons/si';

import {
  Container,
  ProfileImage,
  Name,
  Function,
  SocialMedia,
  Resume,
} from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ProfileImage>
        <img
          src="https://avatars.githubusercontent.com/u/73190799?v=4"
          alt="Halex Ramos"
        />
      </ProfileImage>
      <Name>Hálex Penha Ramos</Name>
      <br />
      <Function>
        <h1>Full stack Developer</h1>
        <a href="https://www.typescriptlang.org/">
          <SiTypescript size={30} />
        </a>
        <a href="https://nodejs.org/en/">
          <FaNodeJs size={30} />
        </a>
        <a href="https://reactjs.org/">
          <GrReactjs size={30} />
        </a>
        <a href="https://reactnative.dev/">
          <GrReactjs size={30} />
        </a>
      </Function>
      <SocialMedia>
        <div>
          <a href="https://www.facebook.com/alex.ramos.319247/">
            <AiFillFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/in/halex-penha-ramos-4869a1150/">
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://github.com/HalexRamos">
            <AiFillGithub size={30} />
          </a>
          <a href="https://www.instagram.com/halexramos/">
            <AiFillInstagram size={30} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5516992349779">
            <IoLogoWhatsapp size={30} />
          </a>
        </div>
      </SocialMedia>

      <Resume>
        <a
          href="./Hálex Penha Ramos - Desenvolvedor Web.pdf"
          download="curriculo-halex-dev-fullstack"
        >
          Baixar currículo
        </a>
      </Resume>
    </Container>
  );
};

export default Page;
