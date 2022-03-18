import React from 'react';

import dirLogo from '../../../../assets/img/dir.svg';
import fileLogo from '../../../../assets/img/file.svg';
import './file.css'


const File = ({file}) => {
    const srcIcon = file.type === 'dir' ? dirLogo : fileLogo;

    return (
        <div className='file'>
            <img src={srcIcon} alt="" className='file__img'/>
            <div className='file__name'>{file.name}</div>
            <div className='file__date'>{file.date.slice(0, 10)}</div>
            <div className='file__size'>{file.size}</div>
        </div>
    );
};


export default File;