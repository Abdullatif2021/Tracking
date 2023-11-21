import { FC, useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import GeneralInfo from './Tabs/GeneralInfo'
import Insurance from './Tabs/Insurance'
import Purchase from './Tabs/Purchase'
import PhysicalInfo from './Tabs/physicalInfo'
import CustomAppBar from '../../../../../../../_metronic/helpers/components/appbar/CustomAppBar'
import { TabWrapper } from '../../../../../../../_metronic/helpers/components/appbar/TabWrapper'
import SubmitButton from '../../../../../../../_metronic/helpers/components/buttons/SubmitButton'
import ResetButton from '../../../../../../../_metronic/helpers/components/buttons/ResetButton'
import { Spinner } from '../../../../../../../_metronic/helpers/components/Spinner'

import { escape } from 'querystring'
import { validationTab1, validationTab2 } from './Tabs/FieldTabs'
interface Props {
  purshase_info: any
}
const Form: FC<Props> = ({ purshase_info }) => {
  //, 'purchase_info'
  const [tab, setTab] = useState(0)
  const { handleSubmit, resetForm, isSubmitting, isValid, touched, errors } = useFormikContext()
  return (
    <>
      <div className='mb-10'></div>
      <div className='card card-custom'>
        <CustomAppBar
          labels={['generalInfo', 'physicalInfo', 'insurance']}
          setSelectedTab={setTab}
          selectedTab={tab}
        />
        <form className='form'

          onSubmit={(e) => {
            e.preventDefault();
            if (Object.keys(errors).some((value) => validationTab1.includes(value))) {
              setTab(0)
            }
            else if (Object.keys(errors).some((value) => validationTab2.includes(value))) {
              setTab(1)
            }
            else{
              handleSubmit()
            }
          }}

          noValidate encType='multipart/form-data'>
          <div className='card-body py-4'>
            <div className='tab-content pt-3'>
              <TabWrapper index={0} selectedTab={tab}>
                <GeneralInfo />
              </TabWrapper>
              <TabWrapper index={1} selectedTab={tab}>
                <PhysicalInfo />
              </TabWrapper>

              {
                <TabWrapper index={2} selectedTab={tab}>
                  <Insurance />
                </TabWrapper>
              }

              {/* <TabWrapper index={3} selectedTab={tab}>
                <Purchase purshase_info={purshase_info} />
              </TabWrapper> */}

              {/* begin::Actions */}
              <div className='text-center pt-15'>
                <ResetButton resetForm={resetForm} isSubmitting={isSubmitting} />
                <SubmitButton isSubmitting={isSubmitting} isValid={true} touched={touched} />
              </div>
              {/* end::Actions */}
            </div>
          </div>
        </form>
        {isSubmitting && <Spinner />}
      </div >
    </>
  )
}

export { Form }
