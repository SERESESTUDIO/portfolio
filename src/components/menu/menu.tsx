import { useTranslation } from 'react-i18next';
import { useCheckMobile } from '../../utils/useCheckMobile';
import { useCheckScroll } from '../../utils/useCheckScroll';
import { NetworkIcon } from '../../icons/networkIcon';
import { useEffect, useState } from 'react';
import { LanguagePanel } from './languagePanel';
import { LogoIcon } from '../../icons/logoIcon';
import { MenuIcon } from '../../icons/menuIcon';
import { CloseIcon } from '../../icons/closeIcon';
import './menu.css';

export const Menu = ({route="", redirect=false}) => {
  const [openLanguagePanel, setOpenLanguagePanel] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [actualRoute, setActualRoute] = useState(route);
  const { t, i18n } = useTranslation();
  const { isMobile } = useCheckMobile();
  const { isOnTop } = useCheckScroll();
  useEffect(()=>{
    navigate(actualRoute);
  },[actualRoute]);
  const navigate = (route:string) => {
    const element = document.getElementById(route);
        
        if (element) {
          // 1. Obtenemos la distancia del elemento al tope del viewport
          const elementPosition = element.getBoundingClientRect().top;
        
          // 2. Obtenemos cuánto scroll ya se ha hecho
          const offsetPosition = elementPosition + window.pageYOffset;
        
          // 3. Restamos unos 100px (o la altura de tu menu) para que quede "centrado" arriba
          let finalPosition = offsetPosition - ((route === "experience") ? 100 : 100);
          if(route === "contact") finalPosition = document.documentElement.scrollHeight + 1000;
          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth'
          });
        }
  }
  useEffect(()=>{
    if(!isOnTop && openMobileMenu){
      setOpenMobileMenu(false);
    }
  },[isOnTop]);
  const changeLink = (event:any, link:string)=>{
    if(redirect){
      const host = window.location.href.split('/')[0];
      window.location.href = `${host}/${link}`;
    }
    else {
      let newRoute = (link === '/') ? "home": link;
      event.preventDefault();
      window.history.pushState({}, '', link);
      setActualRoute(newRoute);
    }
  }
  return (
    <>
      {(!isMobile) && <div className={'menu-container'}>
        <div>
          <a href='/' className='menu-logo'><LogoIcon/></a>
        </div>
        <div className='menu-buttons' id='home'>
          <a onClick={(e)=>changeLink(e, '/')} className={actualRoute === 'home' ? 'active' : 'inactive'}>{t('home')}</a>
          <a onClick={(e)=>changeLink(e, 'expertise')} className={actualRoute === 'expertise' ? 'active' : 'inactive'}>{t('expertise')}</a>
          <a onClick={(e)=>changeLink(e, 'work')} className={actualRoute === 'work' ? 'active' : 'inactive'}>{t('work')}</a>
          <a onClick={(e)=>changeLink(e, 'experience')} className={actualRoute === 'experience' ? 'active' : 'inactive'}>{t('expirience')}</a>
          <a onClick={(e)=>changeLink(e, 'contact')} className={actualRoute === 'contact' ? 'active' : 'inactive'}>{t('contact')}</a>
        </div>
        <div>
          <div className='menu-language' onClick={()=>setOpenLanguagePanel(true)} onPointerLeave={()=>setOpenLanguagePanel(false)}>
            <div>{i18n.language.toUpperCase()}</div>
            <NetworkIcon/>
            {(openLanguagePanel) && <LanguagePanel onClose={()=>{setTimeout(()=>{setOpenLanguagePanel(false)}),50}}/>}
          </div>
        </div>
      </div>}
      {(!isMobile && !isOnTop) && <div className='menu-float'>
        <div></div>
        <div className='menu-buttons-float'>
          <a onClick={(e)=>changeLink(e, '/')} className={actualRoute === 'home' ? 'active' : 'inactive'}>{t('home')}</a>
          <a onClick={(e)=>changeLink(e, 'expertise')} className={actualRoute === 'expertise' ? 'active' : 'inactive'}>{t('expertise')}</a>
          <a onClick={(e)=>changeLink(e, 'work')} className={actualRoute === 'work' ? 'active' : 'inactive'}>{t('work')}</a>
          <a onClick={(e)=>changeLink(e, 'experience')} className={actualRoute === 'experience' ? 'active' : 'inactive'}>{t('expirience')}</a>
          <a onClick={(e)=>changeLink(e, 'contact')} className={actualRoute === 'contact' ? 'active' : 'inactive'}>{t('contact')}</a>
        </div>
        <div></div>
      </div>}
      {(isMobile) && <div className='menu-mobile'>
        <div>
          <div className='menu-icon-mobile' onClick={()=>setOpenMobileMenu(!openMobileMenu)}>
            {(!openMobileMenu) && <MenuIcon/>}
            {(openMobileMenu) && <CloseIcon/>}
          </div>
        </div>
        <a href='/' className='menu-logo-mobile'><LogoIcon/></a>
        <div>
          <div className='menu-language langage-offset-mobile' onClick={()=>setOpenLanguagePanel(true)}>
            <div>{i18n.language.toUpperCase()}</div>
            <NetworkIcon/>
            {(openLanguagePanel) && <LanguagePanel onClose={()=>{setTimeout(()=>{setOpenLanguagePanel(false)}),50}}/>}
          </div>
        </div>
      </div>}
      {(isMobile && openMobileMenu && isOnTop) && <div className='mobile-menu-container'>
        <a onClick={(e)=>changeLink(e, '/')} className={route === 'home' ? 'active' : 'inactive'}>{t('home')}</a>
        <a onClick={(e)=>changeLink(e, 'expertise')} className={route === 'expertise' ? 'active' : 'inactive'}>{t('expertise')}</a>
        <a onClick={(e)=>changeLink(e, 'work')} className={route === 'work' ? 'active' : 'inactive'}>{t('work')}</a>
        <a onClick={(e)=>changeLink(e, 'experience')} className={route === 'experience' ? 'active' : 'inactive'}>{t('expirience')}</a>
        <a onClick={(e)=>changeLink(e, 'contact')} className={route === 'contact' ? 'active' : 'inactive'}>{t('contact')}</a>
      </div>}
    </>
  )
}
