import styled from "styled-components";

export const Content = styled.div`
  display: flex;
`;

export const Nav = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  /* identical to box height */
  color: ${(props) => props.color};
  padding: 0;
  margin: 0;
  margin-left: 45px;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin-left: auto;
`;

export const Li1 = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #cbb1a2;
  padding: 0;
  margin: 0;
  margin-right: 48px;
  &:hover {
    color: #6749a5;
  }
  transition: all 0.5s ease;
`;
