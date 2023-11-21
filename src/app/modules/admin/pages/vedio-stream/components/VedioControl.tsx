import { useState } from 'react';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Dispatch, FC, SetStateAction } from 'react';
import PlayButton from '../../../../../../_metronic/helpers/components/buttons/playButton';
interface Props {
    playing: boolean,
    setPlaying: Dispatch<SetStateAction<boolean>>,
    setVolume: Dispatch<SetStateAction<number>>,
}
const VedioControl: FC<Props> = ({ playing, setPlaying, setVolume }) => {
    const [value, setValue] = useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setVolume(newValue / 100);
    };
    return (
        <div className='d-flex px-1 align-items-center' style={{ background: 'black' }}>
            {!playing && <PlayButton
                onClick={() => {
                    setPlaying(true)
                }}
            >
                <i className='bi bi-play fs-2' style={{ color: 'gray' }} />
            </PlayButton>}
            {playing && <PlayButton
                onClick={() => {
                    setPlaying(false)
                }}
            >
                <i className='bi bi-pause fs-2' style={{ color: 'gray' }} />
            </PlayButton>}

            <div style={{ color: 'gray' }} className=' d-flex align-items-center w-50 mx-2'>
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={handleChange} max={100} min={0} style={{ color: 'gray' }} />
                <VolumeUp />
            </div>
        </div>
    );
}

export default VedioControl;
