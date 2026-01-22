import { useTranslation } from "react-i18next";
import { sampleExperience } from "./experienceConfig"
import './expirienceItem.css';
import { MinusIcon } from "../../icons/minusIcon";
import { PlusIcon } from "../../icons/plusIcon";
const sampleFunc = (data:any) => {console.log(data)};
export const ExpirienceItem = ({configuration=sampleExperience, actualIndex=0, myIndex=0, onReturn=sampleFunc}) => {
    const { i18n } = useTranslation();
    const handleClick = () => {
        if(actualIndex === myIndex) onReturn(0);
        else onReturn(myIndex);
    }
  return (
    <>
        <div className="expirience-item-container" onClick={handleClick}>
            <h3>{`${(i18n.language === "en") ? configuration.role.en : configuration.role.es} @ ${(i18n.language === "en") ? configuration.company.en : configuration.company.es}`}</h3>
            <h3>{(i18n.language === "en") ? configuration.date.en : configuration.date.es}</h3>
            <div>
                {(actualIndex === myIndex) && <MinusIcon />}
                {(actualIndex != myIndex) && <PlusIcon />}
            </div>
        </div>
        {(actualIndex === myIndex) && 
            <div className="expirience-item-details">
                
            </div>
        }
    </>
  )
}
