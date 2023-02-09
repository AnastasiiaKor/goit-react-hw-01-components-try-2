import styled from '@emotion/styled';
export const Item = styled.li`
  border: 1px dotted black;
  display: flex;
  border-radius: 10px;

  align-items: center;
  padding: 10px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;
export const Name = styled.p`
  margin: 0;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${({ theme, status }) => {
    switch (status) {
      case true:
        return theme.colors.green;

      case false:
        return theme.colors.red;
      default:
        return theme.colors.lightGrey;
    }
  }};
`;
