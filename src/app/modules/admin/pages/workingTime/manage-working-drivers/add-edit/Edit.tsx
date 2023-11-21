import { Formik } from 'formik';
import { KTCard, KTCardBody, QUERIES, ResponeApiCheck, initialResponseError, isNotEmpty } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { roleSchema } from './validationForm';
import { getShitEdit, update } from '../core/_requests';
import { useLocation } from 'react-router-dom';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListWorkingDriversDaysPath } from '../../routes/RoutesNames';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner';

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id: any = location.state;
    const { showNotification } = useNotification();
    const [enableApi, setEnableApi] = useState<boolean>(true)
    const {
        data,
        isLoading,
    } = useQuery(
        `${QUERIES.SHIT_EDIT_DETSILS}- ${id}`,
        () => {
            return getShitEdit(id)
        },
        {
            enabled: isNotEmpty(id) && enableApi
        }
    )
    useEffect(() => {
        if (data) {
            setEnableApi(false)
        }
    }, [data]);
    return (
        <KTCard>

            <KTCardBody className='py-4'>
                {!isLoading && <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={{
                        driver_id: data.driver_id,
                        shift_id: data.shift_id,
                        type: data.type,
                        region_id: data.region_id,
                        group_id: data.group_id,
                        date: data.date,
                    }}

                    initialStatus={{ edit: true }}
                    onSubmit={async (values, { setSubmitting }) => {
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await update(values,id);
                            if (res.result == 'success') {
                                navigate(ListWorkingDriversDaysPath)
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
                </Formik>}
                {isLoading && <Spinner />}

            </KTCardBody>

        </KTCard>
    );
}

export default Edit;
