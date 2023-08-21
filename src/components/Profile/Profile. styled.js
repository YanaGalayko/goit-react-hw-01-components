import styled from 'styled-components';

export const Wrapper = styled.div`
width: ${props => props.theme.spacing(60)};
height: 100%;
background-color: ${props => props.theme.colors.background};
border-radius: ${props => props.theme.spacing(1)};
border: 1px solid black;
text-align: center;
padding: 15px 0;
`;

export const DescriptionWrap = styled.div`
padding: 15px 30px;
`;

export const UserImg = styled.img`
margin: 0 auto;
border-radius: ${props => props.theme.spacing(12)};
margin-bottom: 10px;
`;

export const UserName = styled.p`
margin-bottom: 10px;
color: ${props => props.theme.colors.black};
font-size: 25px;
font-weight: 600;
`;

export const UserInfo = styled.p`
margin-bottom: 10px;
color: ${props => props.theme.colors.black};
font-size: 18px;
font-weight: 400;
`;

export const StatsWrap = styled.ul`
display: flex;
justify-content: space-evenly;
gap: ${props => props.theme.spacing(2)};
`;

export const StatsWrapItem = styled.li`
display: flex;
flex-direction: column;
padding: ${props => props.theme.spacing(2)};
`;

export const Label = styled.span`
font-size: 15px;
font-weight: 500;
color: ${props => props.theme.colors.accent};
`;

export const Quantity = styled.span`
color: ${props => props.theme.colors.black};
font-size: 17px;
font-weight: 700;
`;
