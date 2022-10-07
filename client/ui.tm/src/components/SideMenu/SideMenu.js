import style from './SideMenu.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SideMenu = () => {
   




    return (
        <div className={style['sideMenu-content']}>
            <div className={style['burger']}></div>
            <div className={style['buttons']}>
                <div className={style['dashboard']}></div>
                <div className={style['settings']}></div>
            </div>

        </div>
    )
}

export default SideMenu