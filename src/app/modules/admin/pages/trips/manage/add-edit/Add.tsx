import { Formik } from 'formik';
import { KTCard, KTCardBody, QUERIES, ResponeApiCheck, deleteAttributeObjArray, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { initialAddTrip } from '../core/_models';
import { roleSchema } from './validationForm';
import { create } from '../core/_requests';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListPath } from '../../routes/RoutesNames';



const Add = () => {
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    //#region api


    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                     validationSchema={roleSchema}
                    initialValues={initialAddTrip}
                    initialStatus={{ edit: false }}
                    onSubmit={async (values, { setSubmitting }) => {
                         delete values['toAddresses']
                        deleteAttributeObjArray(values, 'fromAddresses', 'path')
                        deleteAttributeObjArray(values, 'vehicles', 'path')
                        console.log(values)
                        // delete values[path]
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await create(values);
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

export default Add;
