import { Formik } from 'formik';
import { KTCard, KTCardBody, ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { initialUserTypeeModel } from '../core/_models';
import { roleSchema } from './validationForm';
import { create } from '../core/_requests';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListUserTypePath } from '../../routes/RoutesNames';

const Add = () => {
    const navigate=useNavigate();
    const { showNotification } = useNotification();
    const location = useLocation();
    const id :any= location.state;
    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={{...initialUserTypeeModel,user_type:id}}
                    initialStatus={{ edit: false }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await create(values);
                            if(res.result=='success'){
                                navigate(ListUserTypePath +'/'+ id)
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

                    <Form  />
                </Formik>


            </KTCardBody>

        </KTCard>
    );
}

export default Add;
