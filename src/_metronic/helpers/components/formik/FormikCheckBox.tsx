import { useFormikContext } from 'formik';
import clsx from 'clsx'
interface props {
    title: string,
    name: string,
    type?: string
}
const FormikSwitch = (props: props) => {
    const { title, name, type } = props;
    const { errors, touched, values, setFieldValue } = useFormikContext();
    return (
        <div className='fv-row mb-7'>
            <label className='col-lg-4 col-form-label fw-bold fs-6'>{title}</label>


            <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                    <input
                        type='checkbox'
                        className={clsx(
                            'form-check-input w-45px h-30px',
                            { 'is-invalid': touched[name] && errors[name] },
                            {
                                'is-valid': touched[name] && !errors[name],
                            }
                        )}
                        defaultChecked={values[name]}
                        onChange={() => {
                            setFieldValue(name, values[name] ? 0 :1);
                        }}
                    />
                    {touched[name] && errors[name] && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                                <span role='alert'>{errors[name]}</span>
                            </div>
                        </div>
                    )}
                    <label className='form-check-label'></label>
                </div>
            </div>
        </div>

    );
}

export default FormikSwitch;
