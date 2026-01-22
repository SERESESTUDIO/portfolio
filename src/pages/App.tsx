import { useEffect } from "react";
import { Menu } from "../components/menu/menu";
import { useTranslation } from "react-i18next";
import { Body } from "../components/body/body";
import { Footer } from "../components/footer/footer";

export const App = ({route=''}) => {
  const {i18n} = useTranslation();
  useEffect(()=>{
    const savedLanguage = window.localStorage.getItem('language');
    if(savedLanguage && savedLanguage !== i18n.language){
      i18n.changeLanguage(savedLanguage);
    }
  },[]);
  return (
    <div className="body">
      <div className="background-linear-faid"></div>
      <Menu route={route}/>
      <Body/>
      <Footer/>
    </div>
  );
};
