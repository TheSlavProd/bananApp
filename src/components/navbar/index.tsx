import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as SC from "./styles";

const A = styled(NavLink)`
  color: #cbb1a2;
  text-decoration: none;
`;

export const Navbar: React.FC = () => {
  const {} = useParams();
  //const { pathname } = useLocation(); //// eji hascena vekalum
  //console.log(pathname);

  return (
    <SC.Nav>
      <SC.Content>
        <SC.H1 color={"black"}>Courses</SC.H1>
        <SC.Ul>
          <SC.Li1>
            <A to="/popular">Popular</A>
          </SC.Li1>
          <SC.Li1>
            <A to="/favorite">Favorite</A>
          </SC.Li1>
          <SC.Li1>
            <A to="/new">New</A>
          </SC.Li1>
        </SC.Ul>
      </SC.Content>
    </SC.Nav>
  );
};
