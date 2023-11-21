/* eslint-disable react-hooks/exhaustive-deps */

const InputFilter = ({ ...props }) => {
  const { title, setValue, value ,type} = props;
  return (
    <div className='fv-row mb-7'>
      {/* begin::Label */}
      <label className='fw-bold fs-6 mb-2'>{title}</label>
      {/* end::Label */}

      {/* begin::Input */}
      <input
        placeholder={title}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type={type ? type : 'text'}
        name='name'
        className={'form-control form-control-solid mb-3 mb-lg-0'}





      />

      {/* end::Input */}
    </div>


  )
}

export { InputFilter }
