import { Formik } from 'formik';
import { KTCard, KTCardBody, QUERIES, ResponeApiCheck, addFieldsToFormData, initialResponseError, isNotEmpty } from '../../../../../../../_metronic/helpers';
import { Form } from './Form';
import { roleSchema } from './validationForm';
import { getDriver, update } from '../core/_requests';
import { useLocation } from 'react-router-dom';
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification';
import { useNavigate } from 'react-router-dom';
import { ListDriverPath } from '../../routes/RoutesNames';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner';
const Edit = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const id: any = location.state
    const { showNotification } = useNotification();
    

    const [enableApi, setEnableApi] = useState<boolean>(true)
    const [editData, setEditData] = useState(null);
    const { data, isLoading } = useQuery(
      `${QUERIES.MANAGE_DRIVER_EDIT_LIST_VALUES}- ${id}`,
      () => {
        return getDriver(id)
      },
      {
        enabled: isNotEmpty(id) && enableApi,
      }
    )
    useEffect(() => {
      if (data) {
        console.log(data)
        setEditData({...data?.data,
            driver_image_ed : data?.data?.meta_data['driver_image'],
            license_image_ed : data?.data?.meta_data['license_image'],
            documents_ed : data?.data?.meta_data['documents'],
            driver_commision_type:data?.data?.meta_data['driver_commision_type'],
            driver_commision:data?.data?.meta_data['driver_commision'],
            emp_id:data?.data?.meta_data['emp_id'],
            econtact:data?.data?.meta_data['econtact'],
            contract_number:data?.data?.meta_data['contract_number'],
            license_number:data?.data?.meta_data['license_number'],
            end_date:data?.data?.meta_data['end_date'],
            issue_date:data?.data?.meta_data['issue_date'],
            start_date:data?.data?.meta_data['start_date'],
            exp_date:data?.data?.meta_data['exp_date'],
            first_name:data?.data?.meta_data['first_name'],
            last_name:data?.data?.meta_data['last_name'],
            middle_name:data?.data?.meta_data['middle_name'],
            address:data?.data?.meta_data['address'],
            phone:data?.data?.meta_data['phone'],
            gender:data?.data?.meta_data['gender'],
            
            
            

        })
        setEnableApi(false)
  
      }
    }, [data])

    useEffect(() => {
     console.log(editData)
      }, [editData])
    return (
        <KTCard>

            <KTCardBody className='py-4'>
               {editData && <Formik
                    enableReinitialize={true}
                    validationSchema={roleSchema}
                    initialValues={editData}
                    initialStatus={{ edit: true }}
                    onSubmit={async (values, { setSubmitting }) => {
                        const formData = new FormData();
                        addFieldsToFormData(formData,values )
                        setSubmitting(true)
                        try {
                            const res: ResponeApiCheck = await update(formData , id);
                            if(res.result=='success'){
                                navigate(ListDriverPath)
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

                {!editData && <Spinner/>}


            </KTCardBody>

        </KTCard>
    );
}

export default Edit;
