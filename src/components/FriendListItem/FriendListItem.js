import PropTypes from 'prop-types'; 
import { FriendList,
         FriedStatus,
         FriedAvatar,
         FriedName
        } from './FriendListItem.styled';

export const FriendListItem = ({friend: { isOnline, avatar, name }}) => {
return (
    <FriendList className="item">
      <FriedStatus $isOnline={isOnline} className="status"></FriedStatus>
      <FriedAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriedName className="name">{name}</FriedName>
    </FriendList>   
)
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };