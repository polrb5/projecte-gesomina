import styled from 'styled-components';

import { Img } from './img';

const Container = styled.div`
  position: relative;
  top: ${({ theme, priority }) => (priority ? theme.sizes.headerMobile : 0)};
  min-height: ${({ theme, minHeight }) => (minHeight || `calc(100vh - ${theme.sizes.headerMobile})`)};
  overflow: hidden;

  & > span {
    z-index: 0;
  }

`;

const SectionImageLayout = ({
  children, data, priority, minHeight,
}) => {
  const { image: { file, alt } } = data;

  return (
    <Container minHeight={minHeight} priority={priority}>
      <Img priority alt={alt} src={file} />
      {children}
    </Container>
  );
};

export default SectionImageLayout;
