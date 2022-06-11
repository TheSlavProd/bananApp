import React from "react";
import { Content } from "./styles";
import { Link, useLocation } from "react-router-dom";

import { List } from "../../Assets/List";
import { Main } from "../../Assets/Main";
import { Group } from "../../Assets/Group";

const listBtnWidth = "48";
const listBtnHeight = "48";

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Content>
      <div
        style={{
          marginTop: "127px",
          borderLeft: `${
            location.pathname === "/" ? "3px solid #8964D7" : "none"
          }`,
        }}
      >
        <Link to="/">
          <Main
            color={location.pathname === "/" ? "#8964D7" : "#e1aa98"}
            width={listBtnWidth}
            height={listBtnHeight}
          />
        </Link>
      </div>
      <div
        style={{
          marginTop: "72px",
          borderLeft: `${
            location.pathname === "/Group" ? "3px solid #8964D7" : "none"
          }`,
        }}
      >
        <Link to="/Group">
          <Group
            color={location.pathname === "/Group" ? "#8964D7" : "#e1aa98"}
            width={listBtnWidth}
            height={listBtnHeight}
          />
        </Link>
      </div>
      <div
        style={{
          marginTop: "72px",
          borderLeft: `${
            location.pathname === "/List" ? "3px solid #8964D7" : "none"
          }`,
        }}
      >
        <Link to="/List">
          <List
            color={location.pathname === "/List" ? "#8964D7" : "#e1aa98"}
            width={listBtnWidth}
            height={listBtnHeight}
          />
        </Link>
      </div>
    </Content>
  );
};
