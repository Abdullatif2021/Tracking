import { Formik } from 'formik';
import {  ResponeApiCheck, addFieldsToFormData, initialResponseError } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { initialVehicle } from '../core/_models';
import { roleSchema } from './validationForm';
import { create } from '../core/_requests';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { ListVehiclesPath } from '../../routes/RoutesNames';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    return (

        <Formik
            enableReinitialize={false}
           validationSchema={roleSchema}
            initialValues={initialVehicle}
            initialStatus={{ edit: false }}
            onSubmit={async (values, { setSubmitting }) => {
                delete values['id']
                delete values['type']
                const formData = new FormData();
                addFieldsToFormData(formData,values )
                setSubmitting(true)
                try {
                    console.log(values)
                    // values['icon']=values['icon_file'];
                    // delete values['icon_file']
                    const res: ResponeApiCheck = await create(formData);
                    if(res.result=='success'){
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

            <Form purshase_info={[]} />
        </Formik>




    );
}

export default Add;
