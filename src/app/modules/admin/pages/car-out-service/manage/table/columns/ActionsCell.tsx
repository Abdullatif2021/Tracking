/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, QUERIES, optionAlertConfirm, } from '../../../../../../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'

import { EditPath } from '../../../routes/RoutesNames'
import { useAuth } from '../../../../../../auth'
import { CarOutService, CarOutStatus } from '../../core/_models'
import { useNotification } from '../../../../../../../../_metronic/hooks/useNotification'
import { useQueryResponse, useQueryResponseSetLoading } from '../../core/QueryResponseProvider'
import { useMutation, useQueryClient } from 'react-query'
import Swal from 'sweetalert2'
import { acceptReject } from '../../core/_requests'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
type Props = {
  data: CarOutService
}

const ActionsCell: FC<Props> = ({data}) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth();
  const intl = useIntl()
  const { showNotification } = useNotification();
  const setLoading = useQueryResponseSetLoading()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
  const handleEdit = () => {
    navigate(EditPath, {state: data})
  }





  const handleAccept = () => {
    Swal.fire({
      ...optionAlertConfirm,
      text: 'Once accepted, you will not be able to recover',
      confirmButtonText: 'Yes, accept it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        acceptItem.mutateAsync()
      }
    })
  }
  const acceptItem = useMutation(() => acceptReject({status:1}, data?.id), {
    onSuccess: (res) => {
      setLoading(false)
      showNotification(res)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.MANAGE_CAR_OUT_SERVICE_LIST_VALUES}-${query}`])
    },
    onError: (error:any) => {
      showNotification(error)
      setLoading(false)
    },
  })
  const handleReject = () => {
    Swal.fire({
      ...optionAlertConfirm,
      text: 'Once rejected, you will not be able to recover',
      confirmButtonText: 'Yes, reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        endItem.mutateAsync()
      }
    })
  }
  const endItem = useMutation(() => acceptReject({status:2}, data?.id), {
    onSuccess: () => {
      setLoading(false)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.MANAGE_CAR_OUT_SERVICE_LIST_VALUES}-${query}`])
    },
    onError: () => {
      setLoading(false)
    },
  })

  return (
    <>
      <ActionButton />
      <MenuActionWrapper>
      { currentUser?.roles.includes('update_car_out_service') &&    <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}
      { (currentUser?.roles.includes('accept_car_out_service') && data.status == CarOutStatus.NotCheck) &&    <MenuActionItem title={intl.formatMessage({id: 'approve'})} onCLick={handleAccept} />}

      { (currentUser?.roles.includes('reject_car_out_service')  &&  data.status == CarOutStatus.NotCheck) &&  <MenuActionItem title={intl.formatMessage({id: 'reject'})} onCLick={handleReject} />}

      </MenuActionWrapper>

    </>
  )
}

export {ActionsCell}
