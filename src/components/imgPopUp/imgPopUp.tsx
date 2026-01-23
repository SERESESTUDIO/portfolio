import './imgPopUp.css';

export const ImgPopUp = ({url="", onClose=()=>{}}) => {
  return (
    <div className='img-popup'>
        <button onClick={onClose}>x</button>
        <img src={url} className='img-popup-img'/>
    </div>
  )
}
