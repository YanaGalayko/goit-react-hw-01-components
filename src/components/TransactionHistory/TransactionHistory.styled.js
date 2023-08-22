import styled from 'styled-components';

export const TransaktionTable = styled.table`
width: 700px;
height: 100%;
border-radius: ${props => props.theme.spacing(1)};
border: 1px solid black;
text-align: center;
`;

export const TransaktionHead = styled.thead`
background-color: ${props => props.theme.colors.background};
`;

export const TransaktionTitle = styled.tr`
font-size: 25px;
font-weight: 700;
text-transform: uppercase;
`;

export const TableColor = styled.tr`

&:nth-child(even) {
    background-color: #B0C4DE;
}
`;
