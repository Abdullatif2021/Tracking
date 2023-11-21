import { Formik } from 'formik';
import { KTCard, KTCardBody, ResponeApiCheck, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { initialWorkTimeModel } from '../core/_models';
import { roleSchema } from './validationForm';
import { create } from '../core/_requests';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListWorkTimePath } from '../../routes/RoutesNames';

const Add = () => {
    const navigate=useNavigate();
    const { showNotification } = useNotification();
    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={initialWorkTimeModel}
                    initialStatus={{ edit: false }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await create(values);
                            if(res.result=='success'){
                                navigate(ListWorkTimePath)
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
