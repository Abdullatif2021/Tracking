import { useFormikContext } from 'formik';
import clsx from 'clsx'
interface props {
    title: string,
    name: string,
    type?: string,
    isRequired: boolean,
    disabled?: boolean
    hint ?:string
}
const FormikInputLabel = (props: props) => {
    const { title, name, type, isRequired, disabled ,hint } = props;
    const { errors, touched, getFieldProps, isSubmitting } = useFormikContext();
    return (
        <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className={`${isRequired ? 'required' : ''} fw-bold fs-6 mb-2`}>{title}</label>
            <input
                placeholder={title}
                {...getFieldProps({ name })}
                type={type || "text"}
                name={name}
                className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    { 'is-invalid': touched[name] && errors[name] },
                    {
                        'is-valid': touched[name] && !errors[name],
                    }
                )}
                autoComplete='off'
                disabled={isSubmitting || disabled}

            />
            {touched[name] && errors[name] && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                        <span role='alert'>{errors[name]}</span>
                    </div>
                </div>
            )}
            {hint && (
                <div className='fv-plugins-message-container'>
                    <div className='text-dark'>
                        <span role='alert'>{hint}</span>
                    </div>
                </div>
            )}
            {/* end::Input */}
        </div>
    );
}

export default FormikInputLabel;
