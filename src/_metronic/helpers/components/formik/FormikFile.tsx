import { useFormikContext } from 'formik';
import clsx from 'clsx'
import { Image, } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { toAbsoluteServerUrl } from '../..';
import { FieldLink } from '../../../utlis/formik';



interface props {
    title: string,
    name: string,
    isRequired: boolean,
    fieldFile: any,
    type?: 'FILE' | 'BASE64'
}
const FormikInputLabel = (props: props) => {
    const { title, name, isRequired, fieldFile, type } = props;
    const { errors, touched, getFieldProps, isSubmitting, setFieldValue, values } = useFormikContext();
    const [uploadedImage, setUploadedImage] = useState<string>(toAbsoluteServerUrl(values[name]));
    const [isValid, setIsValid] = useState<boolean>(true);
    const handleChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const fileReader = new FileReader();
            if (type == 'BASE64') {
                fileReader.onload = () => {
                    if (fileReader.readyState === 2) {
                        setFieldValue(name, fileReader.result);
                    }
                };
            }
            else {
                setFieldValue(fieldFile, event.target.files[0]);
            }

            fileReader.readAsDataURL(event.target.files[0]);
            const url: any = URL.createObjectURL(event.target.files[0])
            setUploadedImage(url);
            setIsValid(true)
        }
    }





    return (
        <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className={`${isRequired ? 'required' : ''} fw-bold fs-6 mb-2`}>{title}</label>
            <input
                placeholder={title}
                // {...getFieldProps({ name })}
                type={"file"}
                name={name}

                onChange={handleChange}
                className={clsx(
                    'form-control form-control-solid mb-3 mb-lg-0',
                    { 'is-invalid': touched[name] && errors[name] },
                    {
                        'is-valid': touched[name] && !errors[name],
                    }
                )}
                autoComplete='off'
                disabled={isSubmitting}
            />
            {touched[name] && errors[name] && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                        <span role='alert'>{errors[name]}</span>
                    </div>
                </div>
            )}
            {
                uploadedImage && isValid && fieldFile != FieldLink && (
                    <Image
                        src={uploadedImage}
                        onLoad={() => { setIsValid(true) }}
                        onError={() => { setIsValid(false) }}
                        thumbnail
                        style={{ width: '120px' }}
                    />
                )
            }
            {/* end::Input */}
        </div>
    );
}

export default FormikInputLabel;
