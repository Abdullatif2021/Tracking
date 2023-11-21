import { Formik } from 'formik';
import { KTCard, KTCardBody, QUERIES, ResponeApiCheck, deleteAttributeObjArray, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { roleSchema } from './validationForm';

import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';

import { useQuery } from 'react-query';
import { initialAddTrip } from '../../../core/Model';
import { addTrip } from '../../../core/request';
import { ListPath } from '../../../routes/RouteNames';



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
                        console.log(values)
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await addTrip(values);
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
