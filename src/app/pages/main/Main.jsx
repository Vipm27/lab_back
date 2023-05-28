import React from 'react';
import './styles/index.css'
import './styles/slider.css'
import './styles/square-plant-icon.css'
import './styles/top-panel.css'
import './styles/rectangular-plant-icon.css'
import NotificElem from './components/NotificElem';
import MyPlant from './components/MyPlant';
import HeaderMain from './components/HeaderMain';
import NotifTabs from './components/NotifTabs';
import useMyPlantStore from './store';
const Main = () => {
    const mainPlant = useMyPlantStore((store) => store.mainPlant)
    const notifications = useMyPlantStore((store) => store.notifications)
    return (
        <div>
            <HeaderMain/>
            <div className='block_information'>
                <div id="notifications-table">
                    <div class="square-buttons">
                    <div class="transparent">
                        {
                            notifications.map(elem => <NotificElem recomendate={elem.recomendate} name={elem.name}  foto={elem.foto} face={elem.face} />)
                        }
                    </div>
                    </div>
                    <NotifTabs/>
                </div>

                <div class="rectangular-buttons">
                    {mainPlant.map(elem => <MyPlant name={elem.name} type={elem.type} date={elem.date} recomendate={elem.recomendate} foto={elem.foto} face={elem.face} />)}
                </div>
            </div>
        </div>
    );
};

export default Main;