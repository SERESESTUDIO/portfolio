import { Expertise } from '../expertise/expertise';
import { Main } from '../main/main';
import './body.css';

export const Body = () => {
  return (
    <div className="body-container">
        <Main />
        <div className='space'></div>
        <Expertise />
        <div className='test'></div>
    </div>
  )
}
