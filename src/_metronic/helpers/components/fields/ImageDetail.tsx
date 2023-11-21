import React, { FC, useState } from 'react';
import { toAbsoluteServerUrl } from '../..';
import FileViewer from '../FileViewer';
import { Image } from "react-bootstrap";
interface Props {
    title: string,
    imgSrc: string,

}
const ImageDetail: FC<Props> = ({ title, imgSrc }) => {

    const [fileViewPath, setFileViewPath] = useState(null);
    const handleFileDialog = () => {
        setFileViewPath(null);
    };
    return (
        <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>{title}</label>

            <div className='col-lg-8'>
                <div className='symbol symbol-circle symbol-50px overflow-hidden me-3' style={{cursor:'pointer'}}>
                    <Image
                        onClick={() => setFileViewPath(toAbsoluteServerUrl(imgSrc))}
                        src={toAbsoluteServerUrl(imgSrc)}
                    />
                    {/* <img src={toAbsoluteServerUrl(imgSrc)} className='w-100' /> */}
                </div>
            </div>

            {fileViewPath && (
                <FileViewer
                    path={fileViewPath}
                    handleFileDialog={handleFileDialog}
                />
            )}
        </div>
    );
}

export default ImageDetail;
