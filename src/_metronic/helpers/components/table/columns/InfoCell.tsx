/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { FC, useState } from 'react'
import { toAbsoluteServerUrl } from '../../../AssetHelpers'
import FileViewer from '../../FileViewer'
import { Image } from 'react-bootstrap'


type Props = {
    data: {
        icon: string,
        name: string,
        email?:string
    }
}

const InfoCell: FC<Props> = ({ data }) => {
    const [fileViewPath, setFileViewPath] = useState(null);
    const handleFileDialog = () => {
        setFileViewPath(null);
    };
    return (
        <div className='d-flex align-items-center'>
            {/* begin:: Avatar */}
            <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
                <a href='#'>

                    <div className='symbol-label'>
                        {/* <Image
                            onClick={() => setFileViewPath(toAbsoluteServerUrl(data?.icon))}
                            src={toAbsoluteServerUrl(data?.icon)}
                            thumbnail
                        /> */}

                        <img src={toAbsoluteServerUrl(data?.icon)} alt={data?.name} className='w-100' onClick={() => setFileViewPath(toAbsoluteServerUrl(data?.icon))} />
                    </div>

                </a>
            </div>
            <div className='d-flex flex-column'>
                <a href='#' className='text-gray-800 text-hover-primary mb-1'>
                    {data?.name}
                </a>
                <span>{data?.email}</span>
            </div>
            {fileViewPath && (
                <FileViewer
                    path={fileViewPath}
                    handleFileDialog={handleFileDialog}
                />
            )}
        </div>
    )
}

export { InfoCell }
