import { Expertise } from '../expertise/expertise';
import { Main } from '../main/main';
import { Work } from '../work/work';
import './body.css';

export const Body = () => {
  return (
    <div className="body-container">
        <Main />
        <div className='space'></div>
        <Expertise />
        <div className='space'></div>
        <Work />
        <div className='space'></div>
    </div>
  )
}
