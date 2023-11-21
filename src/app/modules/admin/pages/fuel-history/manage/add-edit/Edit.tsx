import { Formik } from 'formik';
import { KTCard, KTCardBody, ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { roleSchema } from './validationForm';
import { update } from '../core/_requests';
import { useLocation } from 'react-router-dom';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListPath } from '../../routes/RoutesNames';
import { useEffect, useState } from 'react';
import { AddFuel } from '../core/_models';

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state as AddFuel;
    const [editData, setEditData] = useState<AddFuel>(data);
    const { showNotification } = useNotification();
    useEffect(() => {
        setEditData({
            "id": data?.id,
            "vehicle_id": data?.vehicle_id,
            "date": data?.date,
            "start_meter": data?.start_meter,
            "reference": data?.reference,
            "province": data?.province,
            "image": data?.image,
            "note": data?.note,
            "complete": data?.complete,
            "fuel_from": data?.fuel_from,
            "qty": data?.qty,
            "cost_per_unit": data?.cost_per_unit

        })
    }, [])
    return (
        <KTCard>
            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={editData}
                    initialStatus={{ edit: true }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await update(values, data?.id);
                            if (res.result == 'success') {
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

export default Edit;
