import { createRoot } from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router"
import { App } from "./pages/App";
import "./languages/i18n";
import './fonts.css';
import './main.css';
import { Project } from "./components/project/project";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App route={""}/>} />
        <Route path='/home' element={<App route={"home"}/>} />
        <Route path='/expertise' element={<App route={"expertise"}/>} />
        <Route path='/work' element={<App route={"work"}/>} />
        <Route path='/experience' element={<App route={"experience"}/>} />
        <Route path='/contact' element={<App route={"contact"}/>} />
        <Route path='/work/*' element={<Project/>} />
      </Routes>
  </BrowserRouter>
);
