import './CostSetter.css'
import {StarActive, StarUnActive} from "./Star"

function CostSetter({values, setCardCost, items, isActive}){
    const changeCosts = (item) => {
        if (values.includes(item)){
            var index = values.indexOf(item);
            values.splice(index, 1);
        }
        else{
            values.push(item)
        }
        setCardCost(Array.from(values))
    }

    return (
        <div className={isActive?"costContainer":"costContainer costContainerDisabled"}>
            {items.map(item => <div onClick={() => changeCosts(item)} key={item} >{(values.includes(item))?<StarActive value={item}/>:<StarUnActive value={item}/>} </div>)}
        </div>
    );
}

export default CostSetter
