import { Formik } from 'formik';
import { KTCard, KTCardBody, QUERIES, ResponeApiCheck, initialResponseError } from '../../../../../../../_metronic/helpers';
import { roleSchema } from './validationForm';
import { addVehicle } from '../core/_requests';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListPath } from '../../routes/RoutesNames';
import { FormVehicle } from './FormVehicle';
import { ManageVehicleListWrapper } from '../add-vehicle/List';
import { useIntl } from 'react-intl';
import { useQueryClient } from 'react-query';

const AddVehicle = () => {
    const queryClient = useQueryClient()
    const intel = useIntl()
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    const location = useLocation()
    const data: any = location.state
    return (
        <KTCard>
            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    //  validationSchema={roleSchema}
                    initialValues={{ path_id: data?.id, vehicles_id: [], name: data?.name }}
                    initialStatus={{ edit: false }}
                    onSubmit={async (values: any, { setSubmitting }) => {

                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await addVehicle(values);
                            if (res.result == 'success') {
                              //  navigate(ListPath)
                              queryClient.invalidateQueries([`${QUERIES.ALL_PATH_VEHICLES__LIST_VALUES}`])
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

                    <FormVehicle />
                </Formik>
                <h3>{intel.formatMessage({ id: 'vehicles' })}</h3>
                <div className='separator separator-dashed my-5'></div>
                <ManageVehicleListWrapper path_id={data?.id} />

            </KTCardBody>

        </KTCard>
    );
}

export default AddVehicle;
