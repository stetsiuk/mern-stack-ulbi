import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getFiles} from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css'
import Popup from "./Popup";
import {setPopupDisplay} from "../../reducers/fileReducer";


const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [dispatch, currentDir]);

    const createDirHandler = () => {
        dispatch(setPopupDisplay('flex'))
    }

    return (
        <div className='disk'>
            <div className='disk__btns'>
                <button className='disk__back'>Назад</button>
                <button className='disk__create' onClick={() => createDirHandler()}>Создать папку</button>
            </div>
            <FileList/>
            <Popup/>
        </div>
    );
};


export default Disk;