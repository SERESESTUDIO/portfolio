import { useTranslation } from "react-i18next";
import { sampleExperience } from "./experienceConfig"
import './expirienceItem.css';
import { MinusIcon } from "../../icons/minusIcon";
import { PlusIcon } from "../../icons/plusIcon";
import { LocationIcon } from "../../icons/locationIcon";
import { Network2Icon } from "../../icons/network2Icon";
import { useCheckMobile } from "../../utils/useCheckMobile";
const sampleFunc = (data:any) => {console.log(data)};
export const ExpirienceItem = ({configuration=sampleExperience, actualIndex=0, myIndex=0, onReturn=sampleFunc}) => {
    const { i18n } = useTranslation();
    const { isMobile } = useCheckMobile();
    const handleClick = () => {
        if(actualIndex === myIndex) onReturn(0);
        else onReturn(myIndex);
    }
  return (
    <>
        <div className="expirience-item-container" onClick={handleClick}>
            <h3>{`${(i18n.language === "en") ? configuration.role.en : configuration.role.es} @ ${(i18n.language === "en") ? configuration.company.en : configuration.company.es}`}</h3>
            <h3>{(i18n.language === "en") ? configuration.date.en : configuration.date.es}</h3>
            {(!isMobile) && <div>
                {(actualIndex === myIndex) && <MinusIcon />}
                {(actualIndex != myIndex) && <PlusIcon />}
            </div>}
        </div>
        {(actualIndex === myIndex) && 
            <div className="expirience-item-details">
                <div className="expirience-item-details-header">
                    <LocationIcon />
                    <label>{(i18n.language === "en") ? configuration.location.en : configuration.location.es}</label>
                    <Network2Icon />
                    <label>{configuration.site}</label>
                </div>
                <div className="expirience-item-details-body">
                    <p>{(i18n.language === "en") ? configuration.description.en : configuration.description.es}</p>
                    <img src={configuration.logo} alt="company logo" />
                </div>
                {configuration.milestones.map((milestone, index) => <div key={index} className="expirience-item-details-milestone">
                    <h3>{(i18n.language === "en") ? milestone.title.en : milestone.title.es}</h3>
                    <p>{(i18n.language === "en") ? milestone.description.en : milestone.description.es}</p>
                </div>)}
                <div className="expirience-item-tags">
                    {configuration.tags.map((tag, index)=><span key={index}>{tag}</span>)}
                </div>
            </div>
        }
    </>
  )
}
