import styled from 'styled-components';

export const StatisticsSection = styled.section`
width: ${props => props.theme.spacing(70)};
height: 100%;
background-color: ${props => props.theme.colors.background};
border-radius: ${props => props.theme.spacing(1)};
border: 1px solid black;
text-align: center;
padding: 15px 0;
`;

export const StatisticsTitle = styled.h2`
color: ${props => props.theme.colors.black};
font-size: 25px;
font-weight: 600;
text-transform: uppercase;
text-align: center;
margin-bottom: 30px;
margin-top: 15px;
`;

export const StatisticsList = styled.ul`
display: flex;
justify-content: space-evenly;
gap: ${props => props.theme.spacing(2)};
`;

export const StatisticsItem = styled.li`
display: flex;
flex-direction: column;
`;

export const Label = styled.span`
color: ${props => props.theme.colors.accent};
font-size: 19px;
font-weight: 500;
margin-bottom: 4px;
`;

export const Percentage = styled.span`
font-size: 17px;
font-weight: 700;
`;