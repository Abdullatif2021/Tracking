import React from 'react';
interface Props {
    title: string,
    text: string,

}
const InputDetail = (props: Props) => {
    const { title, text } = props;
    return (
        <div className='row my-2 col-md-4 col-sm-12 col-12' >
            <label className='col-md-5 fw-bold text-muted fs-md-5 fs-sm-5 fs-xs-10'>{title}</label>
            <div className='col-md-7 '>
                <span className='fw-bolder  text-dark fs-md-6 fs-sm-8 fs-xs-10'>{text}</span>
            </div>
        </div>
    );
}

export default InputDetail;
