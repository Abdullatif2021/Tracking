import React from 'react';
interface props {
    isSubmitting: boolean,
    isValid: boolean,
    touched: boolean,
}
const SubmitButton = (props) => {
    const { isSubmitting, isValid, touched } = props;
    return (
        <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isSubmitting || !isValid || !touched}
        >
            {!isSubmitting && <span  className='indicator-label'>Submit</span>}
            {
                isSubmitting && (
                    <span className=''>
                        Please wait...{' '}
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                )
            }
        </button >
    );
}

export default SubmitButton;
