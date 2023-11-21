import { FC, useEffect, useState } from 'react';
import { InputSelectFilter } from '../../../../../../../_metronic/helpers/components/fields/inputSelectFilter';
import VedioPlayer from '../../../vedio-stream/components/LiveStream';
type VideoStream = {
    code: string,
    videoUrl: string
}
interface Props {
    data: VideoStream[]
}
const SingleStyle: FC<Props> = ({ data }) => {
    const [value, setValue] = useState<number>(0);
    const [camera, setCamera] = useState<VideoStream>(data.length > 0 ? data[0] : null);
    useEffect(() => {
        if (value) {
            setCamera(data[value])
        }
    }, [value])
    return (
        <div className="col-md-12">
            <header>
                <InputSelectFilter title='Choose Camera' setValue={setValue} value={value} options={
                    data.map((item, index) => {
                        return {
                            value: index,
                            text: item.code
                        }
                    })
                } />
            </header>
            <div>
                < VedioPlayer title={`camera ${1}`} videoUrl={camera.videoUrl} />
            </div>
        </div>
    );
}

export default SingleStyle;
