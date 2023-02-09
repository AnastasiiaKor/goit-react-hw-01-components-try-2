import styled from '@emotion/styled';
export const TransactionTable = styled.table`
  width: 600px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-spacing: 0;
  text-align: center;
  font-size: 30px;
`;
export const TableHeader = styled.th`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.grey};
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: ${({ theme }) => theme.colors.grey};
`;
export const TableData = styled.td`
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: ${({ theme }) => theme.colors.grey};
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.white};
`;
