import styled from '@emotion/styled';
import { randomHexColor } from 'utils/index';
export const Section = styled.div`
  width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 10px;
  margin-top: 40px;
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h2`
  marging: 0;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc((100% - 20px) / 5);
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: ${randomHexColor};
`;
export const Label = styled.span`
  font-size: 30px;
`;
export const Percentage = styled.span`
  font-weight: 500;
`;
