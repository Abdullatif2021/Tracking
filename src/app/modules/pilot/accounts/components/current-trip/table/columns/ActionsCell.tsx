/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseSetLoading,
} from '../../core/QueryResponseProvider'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {useAuth} from '../../../../../../auth'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components/MenuComponent'
import {optionAlertConfirm} from '../../../../../../../../_metronic/helpers/crud-helper/helpers'
import {QUERIES} from '../../../../../../../../_metronic/helpers/crud-helper/consts'
import {PilotrStatus, TripDriver} from '../../../../core/Model'
import {cancelTrip} from '../../../../core/request'
import { getReasonCancelList } from '../../../../../../admin/pages/core/commonRequests'
import { useNotification } from '../../../../../../../../_metronic/hooks/useNotification'

type Props = {
  data: TripDriver
}

const ActionsCell: FC<Props> = ({data}) => {
  const intl = useIntl()
  const [enableApi, setEnableApi] = useState(true)

  const {
    data: options,
  } = useQuery(
    `${QUERIES.ALL_REASON_LIST_VALUES}`,
    () => {
      return getReasonCancelList()
    },
    {
      enabled: enableApi, keepPreviousData: true,cacheTime:0, refetchOnWindowFocus: false 
    }
  )
  const setLoading = useQueryResponseSetLoading()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  const { showNotification } = useNotification();
  useEffect(() => {
   if(options){
    setEnableApi(false)
   }
  }, [options])

  const transformOptionsForSweetAlert = (options) => {
    const transformedOptions = {}
    //transformedOptions['']="Select Value"
    options.forEach((option) => {
      transformedOptions[option.value] = option.text;
    });
    return transformedOptions;
  };
  const handleEnd = () => {
    Swal.fire({
      title: 'Reason',
      input: 'select',
      showCancelButton: true,
      inputOptions: transformOptionsForSweetAlert(options)||[],
      ...optionAlertConfirm,
      text:'',
      confirmButtonText: 'Yes, cancel it!',
      inputValidator: (value) => {
        if (!value) {
          return 'You must select an option!';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedValue = result.value;
        endItem.mutateAsync(selectedValue)
        setLoading(true)
      }
    })
  }
  const endItem = useMutation((selectedValue : number) => cancelTrip({reason:selectedValue,path_id:data?.id}), {
    onSuccess: (res) => {
      setLoading(false)
      showNotification(res)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PILOT_CURRENT_TRIP_LIST_VALUES}-${query}`])
    },
    onError: (res:any) => {

      showNotification(res)
      setLoading(false)

    },
  })
  return (
    <>
      <div className='d-flex justify-content-end'>
        {data?.status == PilotrStatus.in_Progress && (
          <button type='button' className='btn btn-danger py-2 px-2' onClick={handleEnd}>
            <i className='bi bi-x fs-2'></i>
            {intl.formatMessage({id: 'cancel'})}
          </button>
        )}
      </div>
    </>
  )
}

export {ActionsCell}
