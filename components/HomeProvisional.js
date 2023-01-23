import { useRouter } from 'next/router';
import styled from 'styled-components';
import Logo from './icons/Logo';

import Img from './Img';

const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundLayer};
  z-index: 1;
`;

const PoCWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  z-index: 2;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 70%;
  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 70px;
    text-align: center;
  }
  text-align: center;
  font-size: 120px;
  font-weight: 500;

`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const Text = styled.div`
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
  text-align: center;
  font-size: 35px;
`;

const Email = styled.div`
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
  text-align: center;
  font-size: 35px;
  text-decoration: underline;
  cursor: pointer;
`;

const HomeProvisional = ({ data }) => {
  const { image: { file, alt }} = data;
  const router = useRouter();

  return (
    <>
      <BackgroundGradient />
      <Img priority alt={alt} src={file} />
      <PoCWrapper>
        <ContentBox>
          <Logo />
          <Title>Projecte Geosmina</Title>
          <TextWrapper>
            <Text>
              La web del Projecte Geosmina està en obres.
            </Text>
            <Text>
              Contacte amb nosaltres per tota la informació.
            </Text>
            <Email onClick={() => router.push('mailto:info@projectegeosmina.com')}>
              info@projectegeosmina.com
            </Email>
          </TextWrapper>
        </ContentBox>
      </PoCWrapper>
    </>
  );
};

export default HomeProvisional;
