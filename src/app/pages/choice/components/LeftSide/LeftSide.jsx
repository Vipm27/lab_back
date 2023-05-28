import React, { useState} from "react";
import PlantsElement from "./PlantsElement";
import search from '../../image/search.png';
import usePlantsStore from "../../store";

 const LefsSide =  () => {
    const listPlants = usePlantsStore((state) => state.listPlants)


    const [value, setValue] = useState('')

    const filteredPlants = listPlants.filter( plant => {
        return plant.posts.toLowerCase().includes(value.toLowerCase())
    })

    return(
        <div className="left_side">
            <div className="navigation_main">
                <div className="navigation">
                    <input value={value} type="text" className="navigation__text" onChange={(event) => setValue(event.target.value)} placeholder="Тип растения"/>
                    <img src={search} className="navigation__sticker" alt=""/>
                </div>
            </div>
            <div className="list_of_plants">
                {
                    filteredPlants.map((listPlants) => <PlantsElement posts={listPlants.posts} title={listPlants.title} id={listPlants.id} /> )
                }
            </div>
        </div>
    )
}
export default LefsSide;