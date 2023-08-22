import styled from 'styled-components'

export const List = styled.ul`
display: flex;
flex-direction: column;
width: ${props => props.theme.spacing(60)};
height: 100%;
background-color: ${props => props.theme.colors.background};
border-radius: ${props => props.theme.spacing(1)};
border: 1px solid black;
/* text-align: center; */
padding: 15px 15px;
`;
