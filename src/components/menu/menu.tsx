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

export const Menu = ({route=""}) => {
  const [openLanguagePanel, setOpenLanguagePanel] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const { isMobile } = useCheckMobile();
  const { isOnTop } = useCheckScroll();
  useEffect(()=>{
    if(!isOnTop && openMobileMenu){
      setOpenMobileMenu(false);
    }
  },[isOnTop]);
  return (
    <>
      {(!isMobile) && <div className={'menu-container'}>
        <div>
          <a href='/' className='menu-logo'><LogoIcon/></a>
        </div>
        <div className='menu-buttons'>
          <a href='/home' className={route === 'home' ? 'active' : 'inactive'}>{t('home')}</a>
          <a href='/expertise' className={route === 'expertise' ? 'active' : 'inactive'}>{t('expertise')}</a>
          <a href='/work' className={route === 'work' ? 'active' : 'inactive'}>{t('work')}</a>
          <a href='/experience' className={route === 'experience' ? 'active' : 'inactive'}>{t('expirience')}</a>
          <a href='/contact' className={route === 'contact' ? 'active' : 'inactive'}>{t('contact')}</a>
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
          <a href='/home' className={route === 'home' ? 'active' : 'inactive'}>{t('home')}</a>
          <a href='/expertise' className={route === 'expertise' ? 'active' : 'inactive'}>{t('expertise')}</a>
          <a href='/work' className={route === 'work' ? 'active' : 'inactive'}>{t('work')}</a>
          <a href='/experience' className={route === 'experience' ? 'active' : 'inactive'}>{t('expirience')}</a>
          <a href='/contact' className={route === 'contact' ? 'active' : 'inactive'}>{t('contact')}</a>
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
        <a href='/home' className={route === 'home' ? 'active' : 'inactive'}>{t('home')}</a>
        <a href='/expertise' className={route === 'expertise' ? 'active' : 'inactive'}>{t('expertise')}</a>
        <a href='/work' className={route === 'work' ? 'active' : 'inactive'}>{t('work')}</a>
        <a href='/experience' className={route === 'experience' ? 'active' : 'inactive'}>{t('expirience')}</a>
        <a href='/contact' className={route === 'contact' ? 'active' : 'inactive'}>{t('contact')}</a>
      </div>}
    </>
  )
}
