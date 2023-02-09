import styled from '@emotion/styled';
export const ProfileWrapper = styled.div`
  width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 10px;
  padding: 10px;
`;

export const Description = styled.div`
  text-align: center;
`;
export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px dotted black;
`;
export const Name = styled.p`
  font-weight: 600;
`;
export const Info = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey}; ;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0;
  padding: 0;
  border: 1px solid black;
  border-radius: 10px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding-top: 10px;
  padding-bottom: 10px;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
export const Label = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 10px;
`;
