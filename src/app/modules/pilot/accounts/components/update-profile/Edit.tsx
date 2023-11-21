import { Formik } from 'formik';
import { KTCard, KTCardBody, ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../_metronic/helpers';
import { Form } from './Form';
import { roleSchema } from './validationForm';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../../../../../_metronic/hooks/useNotification';
import { ListPath } from '../../routes/RouteNames';
import { updateProfile } from '../../core/request';

const UpdateProfile = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const data: any = location.state;
    const { showNotification } = useNotification();

    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={{email:data?.email , name:data?.name, gender:data.gender,mobile:data?.mobile}}
                    initialStatus={{ edit: true }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await updateProfile(values);
                            if(res.result=='success'){
                                navigate(ListPath)
                            }
                            showNotification(res)
                        } catch (ex) {
                            showNotification({ error_description: ex, ...initialResponseError })
                            console.error(ex)
                        } finally {
                            setSubmitting(true)
                        }
                    }}
                    onReset={(values) => {
                        console.log('Formik onReset');
                    }}
                >

                    <Form />
                </Formik>


            </KTCardBody>

        </KTCard>
    );
}

export default UpdateProfile;
