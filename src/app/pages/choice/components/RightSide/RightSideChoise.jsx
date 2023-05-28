import React from "react";
import imgBigPlants from '../../image/58998_rosendahl_grand_cru_doniczka 3.png'
import fire from '../../image/fire.png';
import dawn from '../../image/dawn.png';
import rain from '../../image/rain.png';
import usePlantsStore from "../../store";
// import infPlant from '../../ui/infPlant/infPlant'
import InfPlant from "../../../../components/ui/infPlant/infPlant";

 const RightSideChoise = () =>{
    const plantChoiced = usePlantsStore((state) => state.PlantChoiced)
    const character = usePlantsStore((state) => state.character)
    const id = usePlantsStore((state) => state.id)

    return(
        <div  className="right_side">
            <div className="informations_plant">
                {character.map((elem) => (<InfPlant body={plantChoiced[id][elem]} text={elem}/>))}
            </div>
            <img src={imgBigPlants} className="right_side__image_plants" alt="" />
            <div className="right_side__shadow"></div>
            <div className="right_side__figure_left_top"></div>
            <div className="information">
                <span className="information__hieght_text">{plantChoiced[id].namePlants}</span>
                <div className="information__discription">
                    <span className="information__small_text">{plantChoiced[id].description}</span>
                </div>
                <div className="information__stickers">
                    <img src={fire} className="information__sticker" alt=""/>
                    <img src={dawn} className="information__sticker" alt=""/>
                    <img src={rain} className="information__sticker" alt=""/>
                </div>
                <button type="button" className="information__button">Подтвердить выбор</button>
            </div>
        </div>
    )
}
export default RightSideChoise;
