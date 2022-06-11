import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IImage } from "../../types/globalTypes";

const ContentPage = styled.div`
  width: 100%;
  padding: 0 99px;
  text-align: center;
  
`;

const ContentMain = styled.div`
  text-align: center;
`;

type Data = {
  data: IImage[];
};

export const Content: React.FC<Data> = ({ data }) => {
  return (
    <ContentPage>
      <ContentMain>
        {data.map(({ id, url }) => (
          <div style={{ paddingBottom: "10px" }}>
            <img key={id} src={url} />
          </div>
        ))}
      </ContentMain>
    </ContentPage>
  );
};
