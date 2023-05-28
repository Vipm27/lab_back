import React from "react";
import rosendahl from '../../image/58998_rosendahl_grand_cru_doniczka 2.png';
import fire from '../../image/fire.png';
import dawn from '../../image/dawn.png';
import rain from '../../image/rain.png';
import usePlantsStore from  "../../store";

 const PlantsElement =  ({posts, title, id}) => {

    const idSet = usePlantsStore((state) => state.idSetFunction)

    return(
            <div id={id} className="list_of_plants__element_plants" onClick={() => idSet(id)}>
                <img src={rosendahl} className="list_of_plants__sticker_plants"  alt=""/>
                <div className="right_side__shadow"></div>
                <div className="list_of_plants__left_top_figure"></div>
                <div className="list_of_plants_text">
                    <span className="list_of_plants__hieght_text">{posts}</span>
                    <span className="list_of_plants__small_text">{title}</span>
                </div>
                <div class="list_of_plants__stickers">
                    <img src={fire} className="list_of_plants__sticker" alt=""/>
                    <img src={dawn} className="list_of_plants__sticker" alt=""/>
                    <img src={rain} className="list_of_plants__sticker" alt=""/>
                </div>
            </div>
    )
}
export default PlantsElement;