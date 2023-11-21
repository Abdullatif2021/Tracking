import React from 'react';
interface Props {
    title: string,
    text: string,

}
const InputDetail = (props: Props) => {
    const { title, text } = props;
    return (
        <div className='row mb-7 '>
            <label className='col-lg-4 fw-bold text-muted'>{title}</label>

            <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>{text}</span>
            </div>
        </div>
    );
}

export default InputDetail;
