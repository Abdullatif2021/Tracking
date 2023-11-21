import React from 'react';

interface props {
    isSubmitting:boolean,
    resetForm:()=>void,

}
const ResetButton = (props:props) => {
    const { resetForm, isSubmitting } = props;
    return (

        <button
            type='reset'
            onClick={() => resetForm()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={isSubmitting}
        >
            Discard
        </button>
    );
}

export default ResetButton;
