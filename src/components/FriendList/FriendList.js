import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types'; 
import { List } from "./FriendList.styled";


export const FriendList = ({friends}) => {
return <List className="friend-list">
{friends.map(friend => (
      <FriendListItem friend={friend} key={friend.id}/>
))}
</List>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };