import React from 'react';
interface props {
    isSelected: boolean,
    onClick: () => void
}
const SelectionerHoc = (props: props) => {
    const { isSelected, onClick } = props;
    return (
        <div className='form-check form-check-custom form-check-solid'>
            <input
                className='form-check-input'
                type='checkbox'
                data-kt-check={isSelected}
                data-kt-check-target='#kt_table_users .form-check-input'
                checked={isSelected}
                onChange={onClick}
            />
        </div>
    );
}

export default SelectionerHoc;
