/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, QUERIES, optionAlertConfirm} from '../../../../../../../../_metronic/helpers'
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseSetLoading,
} from '../../core/QueryResponseProvider'
import {destroy} from '../../core/_requests'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {EditPath} from '../../../routes/RoutesNames'
import {Terminal} from '../../core/_models'
import {MapTerminalPath} from '../../../../stations/routes/RoutesNames'
import {useAuth} from '../../../../../../auth'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
type Props = {
  data: Terminal
}

const ActionsCell: FC<Props> = ({data}) => {
  const navigate = useNavigate()
  const setLoading = useQueryResponseSetLoading()
  const {query} = useQueryResponse()
  const items = useQueryResponseData()
  const queryClient = useQueryClient()
  const {currentUser} = useAuth()
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {
    navigate(EditPath, {state: data})
  }

  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        // setLoading(true)
        // deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(data?.id), {
    onSuccess: () => {
      setLoading(false)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.VEHICLES_COLORS}-${query}`])
    },
    onError: () => {
      setLoading(false)
    },
  })
  const handleMap = () => {
    navigate(MapTerminalPath, {state: data?.id})
  }
  return (
    <>
      <ActionButton />
      {/* begin::Menu */}
      <MenuActionWrapper>
        {currentUser?.roles.includes('edit_terminal') && (
          <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />
        )}
        {/* <MenuActionItem title={intl.formatMessage({id: 'delete'})} onCLick={handleDelete}  /> */}

        {data?.permissions.map((x) => x.code).includes('View_Terminal_Account') && (
          <MenuActionItem title={intl.formatMessage({id: 'move_to_map'})} onCLick={handleMap} />
        )}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export {ActionsCell}
