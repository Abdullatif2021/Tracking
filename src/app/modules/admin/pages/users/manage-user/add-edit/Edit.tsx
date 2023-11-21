import { Formik } from 'formik';
import { KTCard, KTCardBody, ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { roleSchema } from './validationForm';
import { update } from '../core/_requests';
import { useLocation } from 'react-router-dom';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListUserPath } from '../../routes/RoutesNames';
import { useEffect } from 'react';
const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data: any = location.state;
    const { showNotification } = useNotification();

    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={{ ...data, role_id: 1, first_name :data?.meta_data?.first_name , last_name:data?.meta_data?.last_name,password:null,group_id:data?.group_id }}
                    initialStatus={{ edit: true }}
                    onSubmit={async (values, { setSubmitting }) => {
                        const formData = new FormData();
                        addFieldsToFormData(formData, values)
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await update(formData, data?.id);
                            if (res.result == 'success') {
                                navigate(ListUserPath)
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

export default Edit;
