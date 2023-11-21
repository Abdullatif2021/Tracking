/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { MenuComponent } from '../../../../../../../../../_metronic/assets/ts/components'
import { useQueryResponse, useQueryResponseData, useQueryResponseSetLoading } from '../../core/QueryResponseProvider'
import { destroy } from '../../core/_requests'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { AdsPath } from '../../core/_models'

import { QUERIES, optionAlertConfirm } from '../../../../../../../../../_metronic/helpers'
import { MenuActionWrapper } from '../../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { ActionButton } from '../../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'

type Props = {
  data: AdsPath
}

const ActionsCell: FC<Props> = ({ data }) => {
  const navigate = useNavigate()
  const setLoading = useQueryResponseSetLoading();
  const { query } = useQueryResponse()
  const items = useQueryResponseData()
  const queryClient = useQueryClient()
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])


  const handleDelete = () => {
    Swal.fire({ ...optionAlertConfirm }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(data?.path_ads_id), {
    onSuccess: () => {
      setLoading(false)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.ALL_ADS_PATH_LIST_VALUES}`])
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
        {<MenuActionItem title={intl.formatMessage({ id: 'delete' })} onCLick={handleDelete} />}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export { ActionsCell }
