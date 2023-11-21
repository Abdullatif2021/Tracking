import { Dialog } from '@mui/material';
import { FC } from 'react';
interface Props {
    path: string,
    handleFileDialog: () => void
}

const FileViewer: FC<Props> = ({ path, handleFileDialog }) => {

    return (
        path != null && (
            <div>
                <Dialog

                    

                    fullWidth
                    maxWidth={'sm'}
                    aria-labelledby="form-dialog-title"
                    open
                    onClick={handleFileDialog}
                >
                    <img

                        src={path}
                        onClick={handleFileDialog}
                        alt="no image"
                    />
                </Dialog>
            </div>
        )
    );
}
export default FileViewer;