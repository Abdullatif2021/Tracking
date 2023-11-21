import React, {useState} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import withDragAndDrop, {withDragAndDropProps} from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseSetLoading,
} from '../core/QueryResponseProvider'
import {useListView} from '../core/ListViewProvider'
import {useMutation, useQueryClient} from 'react-query'
import {QUERIES} from '../../../../../../../_metronic/helpers'
import {dublicate} from '../core/_requests'
import { useNotification } from '../../../../../../../_metronic/hooks/useNotification'
const localizer = momentLocalizer(moment)

const MYCalendar = () => {
  const { showNotification } = useNotification();
  const setLoading = useQueryResponseSetLoading();
  const [date, setDate] = useState(new Date());
  const {setItemIdForUpdate} = useListView();
  const {query} = useQueryResponse();
  const queryClient = useQueryClient();
  const items = useQueryResponseData();

  const handleEventSelected = (event) => {
    setItemIdForUpdate(event?.id)
  }
  const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
    let temp = {
      event :data?.event,
      date: moment(data.start).format('YYYY-MM-DD'),
    }
    setLoading(true)
    dublicateEvent.mutateAsync(temp)
  }
  const dublicateEvent = useMutation((data: any) => dublicate(data), {
    onSuccess: (res) => {
      showNotification(res)
      setLoading(false)
      queryClient.invalidateQueries([`${QUERIES.WORKING_CARS_DAYS_LIST_VALUES}-${query}`])
    },
    onError: (res:any) => {
    
      setLoading(false)
      showNotification(res)
    },
  })

  const DnDCalendar = withDragAndDrop(Calendar)
  return (
    <div style={{height: 700}}>
      <DnDCalendar
        date={date}
        onNavigate={(date) => setDate(date)}
        localizer={localizer}
        events={items}
        step={60}
        defaultDate={moment().toDate()}
        views={['day', 'month', 'week']}
        popup={true}
        onSelectEvent={(event) => handleEventSelected(event)}
        selectable
        // resizable
        onEventDrop={onEventDrop}
        //  onEventResize={onEventResize}
      />
    </div>
  )
}
export {MYCalendar}
