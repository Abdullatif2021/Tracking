
const CheckBoxFilter = ({ ...props }) => {
    const { title, setValue, value } = props;
    return (

        <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='fw-bold fs-6 mb-2'>{title}</label>
            {/* end::Label */}

            {/* begin::Input */}
            <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                    <input
                        className='form-check-input w-45px h-30px'
                        type='checkbox'
                        defaultChecked={value}
                        onChange={() => {
                            setValue(!value);
                        }}
                    />

                    <label className='form-check-label'></label>
                </div>
            </div>

            {/* end::Input */}
        </div>

    );
}

export default CheckBoxFilter;
