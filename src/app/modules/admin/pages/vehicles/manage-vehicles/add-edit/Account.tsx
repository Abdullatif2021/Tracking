import { Formik } from 'formik';
import { KTCard, KTCardBody, QUERIES, ResponeApiCheck, SuccessMsg, initialResponseError } from '../../../../../../../_metronic/helpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { AccountForm } from './AccountForm';
import { SaveAccountCar, getAccountCar } from '../core/_requests';
import { useQuery } from 'react-query';
//test
import * as Yup from 'yup'
import { ListVehiclesPath } from '../../routes/RoutesNames';
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner';
const roleSchema = Yup.object().shape({
    password: Yup.string()
        .required('Field is required'),


})


const AccountVehicle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id: any = location.state;
    const { showNotification } = useNotification();


    const {
        data: acountData,
        isLoading,
    } = useQuery(
        `${QUERIES.VEHICLES_ACCOUNT_INFO_PASSWORD + id}`,
        () => {
            return getAccountCar(id)
        },
      //  { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }

    )
    return (
        <KTCard>

            <KTCardBody className='py-4'>
                <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={acountData?.data ||{}}
                    initialStatus={{ edit: true }}
                    onSubmit={async (values, { setSubmitting }) => {
                        delete values['email']
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await SaveAccountCar(values,id);
                            if(res.result=='success'){
                                navigate(ListVehiclesPath)
                                showNotification(SuccessMsg)
                            }
                            else{
                                showNotification(res)
                            }
                           
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

                    <AccountForm />
                </Formik>

            </KTCardBody>
            {isLoading && <Spinner />}
        </KTCard>

    );
}

export default AccountVehicle;
