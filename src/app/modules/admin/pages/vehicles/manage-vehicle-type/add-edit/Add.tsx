import { Formik } from 'formik';
import { KTCard, KTCardBody, ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { initialVehicleType } from '../core/_models';
import { roleSchema } from './validationForm';
import { create } from '../core/_requests';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListTypesPath } from '../../routes/RoutesNames';

const Add = () => {
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={initialVehicleType}
                    initialStatus={{ edit: false }}
                    onSubmit={async (values, { setSubmitting }) => {
                        const formData = new FormData();
                        addFieldsToFormData(formData,values )
                        setSubmitting(true)
                        try {
                 
                            // values['icon']=values['icon_file'];
                            // delete values['icon_file']
                            const res: ResponeApiCheck = await create(formData);
                            if(res.result=='success'){
                                navigate(ListTypesPath)
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

export default Add;
