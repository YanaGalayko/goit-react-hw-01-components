import PropTypes from 'prop-types'; 

export const FriendListItem = ({friend: { isOnline, avatar, name }}) => {
return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>   
)
}

// $isOnline={isOnline}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };