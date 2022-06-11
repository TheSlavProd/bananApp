import React, { useState } from "react";

import "./App.css";
import styled from "styled-components";
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/navbar";
import { Content } from "./components/content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Group } from "./components/group";
import List from "./components/list";
import { Project } from "./pages/project";

import { useSelector } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { IImage, ImageTypeEnum } from "./types/globalTypes";
import { getItems } from "./api/getList";
import "bootstrap/dist/css/bootstrap.min.css";
const Main = styled.div`
  margin: 0 200px;
`;

function App() {
  getItems();
  const images = useTypedSelector((state) => state.images.images);
  //const [image, setImage] = useState<IImage[]>(images);
  const filterImages = (images: IImage[], type: ImageTypeEnum) => {
    return images.filter((item) => item.type === type);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Main>
          <Navbar />

          <Routes>
            <Route path="/" element={<Content data={images} />} />
            <Route path="/Group" element={<Group />} />
            <Route path="/List" element={<List />} />
            <Route path="/:id" element={<Project />} />

            <Route
              path="/popular"
              element={
                <Content data={filterImages(images, ImageTypeEnum.Popular)} />
              }
            />
            <Route
              path="/favorite"
              element={
                <Content data={filterImages(images, ImageTypeEnum.Favorite)} />
              }
            />
            <Route
              path="/new"
              element={
                <Content data={filterImages(images, ImageTypeEnum.New)} />
              }
            />

            <Route path="*" />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
