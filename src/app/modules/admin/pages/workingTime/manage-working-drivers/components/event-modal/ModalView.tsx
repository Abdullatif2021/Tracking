import { useEffect } from 'react'
import { ModalFormWrapper } from './ModalFormWrapper'
import { ModalHeader } from './ModalHeader'


const ModalView = () => {
    useEffect(() => {
        document.body.classList.add('modal-open')
        return () => {
            document.body.classList.remove('modal-open')
        }
    }, [])
    return (
        <>
            <div
                className='modal fade show d-block'
                id='kt_modal_add_user'
                role='dialog'
                tabIndex={-1}
                aria-modal='true'
            >
                <div className='modal-dialog modal-dialog-centered'>
                    {/* begin::Modal content */}
                    <div className='modal-content'>
                        <ModalHeader/>
                        <div className='modal-body scroll-y'>
                            <ModalFormWrapper />
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </>
    )
}

export { ModalView }
