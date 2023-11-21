import { Formik } from 'formik';
import {  ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';

import { useLocation } from 'react-router-dom';

import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { ListVehiclesPath } from '../../routes/RoutesNames';
import { useNavigate } from 'react-router-dom';
import { update } from '../core/_requests';
import { useEffect, useState } from 'react';
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner';

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const payloadData = location.state;
    const [data, setData] = useState<any>(payloadData);
    const [purshase_info, setPurshaseInfo] = useState<any>([]);
    useEffect(() => {
        if (data) {
            console.log(data)
            setData({
                ...data, insurance_number: data.meta_data.ins_number, exp_date: data.meta_data.ins_exp_date,

                exp_name: '', exp_amount: '',
                average: data.meta_data?.average
            }
            )
            setPurshaseInfo(data.meta_data.purchase_info)
        }
        else {
            navigate(ListVehiclesPath)
        }

    }, [payloadData])


    const { showNotification } = useNotification();
    return (
        <>
            data && <Formik
                enableReinitialize={true}
                // validationSchema={roleSchema}
                initialValues={data}
                initialStatus={{ edit: true }}
                onSubmit={async (values, { setSubmitting }) => {
                    delete values['type']
                    const formData = new FormData();
                    addFieldsToFormData(formData, values)
                    setSubmitting(true)
                    try {
                        const res: ResponeApiCheck = await update(formData, values?.id);
                        if (res.result == 'success') {
                            navigate(ListVehiclesPath)
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

                <Form purshase_info={purshase_info} />

            </Formik>


            {!data && <Spinner />}
        </>



    );
}

export default Edit;
