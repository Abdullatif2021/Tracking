import React, { FC, useState } from 'react';
import VedioPlayer from '../../../vedio-stream/components/LiveStream';
type VideoStream = {
    code: string,
    videoUrl: string
}
interface Props {
    data: VideoStream[]
}
const SplitStyle: FC<Props> = ({ data }) => {

    const [seledctedVedio, setSelectedVedio] = useState(data.length > 0 ? data[0] : null);
    const handleClick = (data: VideoStream) => {
        setSelectedVedio(data)
    }
    return (
        <>
            <div className="col-md-10">
                < VedioPlayer title={`camera ${seledctedVedio.code}`} videoUrl={seledctedVedio?.videoUrl} />
            </div>
            <div className="col-md-2">
                <div className="row">
                    <>
                        {
                            data.filter(x => x.code != seledctedVedio?.code).map((item, index) => {
                                return (
                                    <div className="col-md-12" onClick={() => handleClick(data[index])} key={index}>
                                        < VedioPlayer title={`camera ${item?.code}`} videoUrl={item?.videoUrl} onClick={() => { handleClick(data[index]) }} />
                                    </div>
                                )
                            })
                        }
                    </>
                </div>
            </div>
        </>
    );
}

export default SplitStyle;
