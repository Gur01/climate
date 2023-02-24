import styled from "styled-components";

const Group = ({ children, type = "vertical", ...props }) => {
  return (
    <StyledGroup type={type} {...props}>
      {children}
    </StyledGroup>
  );
};

export default Group;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === "vertical" ? "column" : "row")};
  width: 100%;

  > *:not(:last-child) {
    ${({ type }) =>
      type === "vertical" ? "margin-bottom: 40px;" : "margin-right: 16px;"}
  }

  @media screen and (min-width: 1024px) {
    > *:not(:last-child) {
      ${({ type }) =>
        type === "vertical" ? "margin-bottom: 60px;" : "margin-right: 16px;"}
    }
  }
`;
