/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import { optionAlertConfirm} from '../../../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData, useQueryResponseSetLoading} from '../../core/QueryResponseProvider'
import {destroy} from '../../core/_requests'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {EditReasonCarOutServicePath} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'
import { ReasonCancel } from '../../core/_models'
import { useAuth } from '../../../../../../auth'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
type Props = {
  data: ReasonCancel
}

const ActionsCell: FC<Props> = ({data}) => {
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const setLoading= useQueryResponseSetLoading();
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {

    navigate(EditReasonCarOutServicePath, {state: data})
  }

  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(data?.id), {
    onSuccess: () => {
      setLoading(false)
      // ✅ update detail view directly
     // queryClient.invalidateQueries([`${QUERIES.VEHICLES_COLORS}-${query}`])
    },
    onError: () => {
      setLoading(false)
    },
  })

  return (
    <>
      <ActionButton />
      {/* begin::Menu */}
      <MenuActionWrapper>
     { currentUser?.roles.includes('edit_reason_car_out_service')  &&  <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}

        {/* <MenuActionItem title={intl.formatMessage({id: 'delete'})} onCLick={handleDelete} /> */}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export {ActionsCell}
