import styled from 'styled-components'

const getBcgColor = props => {
    return props.$isOnline ? 'green' : 'red';
  };

export const FriendList = styled.li`
display: flex;
align-items: center;
gap: ${props => props.theme.spacing(4)};
margin-bottom: ${props => props.theme.spacing(3)};

&:last-child {
    margin-bottom: 0;
  }
`;

export const FriedStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${getBcgColor};
`;
export const FriedAvatar = styled.img`
  border: 1px solid black;
  border-radius: 8px;
  background-color: #87CEFA;
`;
export const FriedName = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  font-weight: 700;
`;