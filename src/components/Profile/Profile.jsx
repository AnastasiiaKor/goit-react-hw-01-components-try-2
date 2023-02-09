import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Info,
  List,
  Item,
  Label,
} from './Profile.styled';
export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <List>
        <Item>
          <Label>Followers</Label>
          <span>{followers}</span>
        </Item>
        <Item>
          <Label>Views</Label>
          <span>{views}</span>
        </Item>
        <Item>
          <Label>Likes</Label>
          <span>{likes}</span>
        </Item>
      </List>
    </ProfileWrapper>
  );
}
