import { FC } from "react";
import VedioPlayer from "./components/LiveStream";

const LiveStream: FC = () => {
    return (
        <div>
            <VedioPlayer  title="camera" videoUrl=""/>
        </div>
    )
}

export default LiveStream