import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  height: 60px;
  padding: 0 30px;
`;
