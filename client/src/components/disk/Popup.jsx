import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {createDir} from "../../actions/file";
import {setPopupDisplay} from "../../reducers/fileReducer";
import Input from "../../utils/input/Input";
import './Popup.css'



const Popup = () => {
    const dispatch = useDispatch();

    const currentDir = useSelector(state => state.files.currentDir);
    const popupDisplay = useSelector(state => state.files.popupDisplay);
    const [dirName, setDirName] = useState('');


    const closePopup = () => {
        dispatch(setPopupDisplay('none'));
    };

    const createDirHandler = () => {
        dispatch(createDir(currentDir, dirName));
        setDirName('');
        closePopup();
    };

    return (
        <div className='popup' style={{display: popupDisplay}} onClick={closePopup}>
            <div className='popup__content' onClick={(e) => e.stopPropagation()}>
                <div className='popup__header'>
                    <div className='popup__title'>Создать новую папку</div>
                    <button className='popup__close' onClick={closePopup}>Х</button>
                </div>
                <Input
                    type='text'
                    placeholder='Введите название папки'
                    value={dirName}
                    setValue={setDirName}
                />
                <button className='popup__create' onClick={createDirHandler}>Создать</button>
            </div>
        </div>
    );
};


export default Popup;