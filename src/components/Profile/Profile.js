import PropTypes from 'prop-types'; 
import { Wrapper,
         DescriptionWrap,
         UserImg,
         UserName,
         UserInfo,
         StatsWrap,
         StatsWrapItem,
         Label,
         Quantity
         } from './Profile. styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
return    <Wrapper className="profile">
  <DescriptionWrap className="description">
    <UserImg
      src={avatar}
      alt={username}
      className="avatar"
      width={150}
    />
    <UserName className="name">{username}</UserName>
    <UserInfo className="tag">@{tag}</UserInfo>
    <UserInfo className="location">{location}</UserInfo>
  </DescriptionWrap>

  <StatsWrap className="stats">
    <StatsWrapItem>
      <Label className="label">Followers</Label>
      <Quantity className="quantity">{stats.followers}</Quantity>
    </StatsWrapItem>
    <StatsWrapItem>
      <Label className="label">Views</Label>
      <Quantity className="quantity">{stats.views}</Quantity>
    </StatsWrapItem>
    <StatsWrapItem>
      <Label className="label">Likes</Label>
      <Quantity className="quantity">{stats.likes}</Quantity>
    </StatsWrapItem>
  </StatsWrap>
</Wrapper>
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
