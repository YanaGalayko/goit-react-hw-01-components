import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  gap: ${props => props.theme.spacing(11)};
`;