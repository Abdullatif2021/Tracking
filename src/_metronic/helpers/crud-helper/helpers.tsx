import {createContext, Dispatch, SetStateAction, useEffect, useState} from 'react'
import qs from 'qs'
import {
  ID,
  QueryResponseContextProps,
  QueryResponseContextProps1,
  QuerySingleResponseContextProps,
  QueryState,
  ResponeApiCheck,
} from './models'

function createResponseContext<T>(initialState: QueryResponseContextProps<T>) {
  return createContext(initialState)
}
function createResponseContext1<T>(initialState: QueryResponseContextProps1<T>) {
  return createContext(initialState)
}

function createSingleResponseContext<T>(initialState: QuerySingleResponseContextProps<T>) {
  return createContext(initialState)
}

function isNotEmpty(obj: unknown) {
  return obj !== undefined && obj !== null && obj !== ''
}

// Example: page=1&items_per_page=10&sort=id&order=desc&search=a&filter_name=a&filter_online=false
function stringifyRequestQuery(state: QueryState): string {
  const pagination = qs.stringify(state, {
    filter: ['page_num', 'page_size'],
    skipNulls: true,
  })
  // const sort = qs.stringify(state, { filter: ['sort', 'order'], skipNulls: true })
  const sortString = JSON.stringify(state.sort)
  const sort = qs.stringify({...state, sort: sortString}, {filter: ['sort'], skipNulls: true})

  const search = isNotEmpty(state.search)
    ? qs.stringify(state, {filter: ['search'], skipNulls: true})
    : ''

  const filterString = JSON.stringify(state?.filtter)
  const filtter = qs.stringify({filtter: filterString}, {skipNulls: false})

  return [pagination, sort, search, filtter].filter((f) => f).join('&')
  // .toLowerCase()
}

function parseRequestQuery(query: string): QueryState {
  const cache: unknown = qs.parse(query)
  return cache as QueryState
}

function calculatedGroupingIsDisabled<T>(isLoading: boolean, data: Array<T> | undefined): boolean {
  if (isLoading) {
    return true
  }

  return !data || !data.length
}

function calculateIsAllDataSelected<T>(data: Array<T> | undefined, selected: Array<ID>): boolean {
  if (!data) {
    return false
  }

  return data.length > 0 && data.length === selected.length
}

function groupingOnSelect(
  id: ID,
  selected: Array<ID>,
  setSelected: Dispatch<SetStateAction<Array<ID>>>
) {
  if (!id) {
    return
  }

  if (selected.includes(id)) {
    setSelected(selected.filter((itemId) => itemId !== id))
  } else {
    const updatedSelected = [...selected]
    updatedSelected.push(id)
    setSelected(updatedSelected)
  }
}

function groupingOnSelectAll<T>(
  isAllSelected: boolean,
  setSelected: Dispatch<SetStateAction<Array<ID>>>,
  data?: Array<T & {id?: ID}>
) {
  if (isAllSelected) {
    setSelected([])
    return
  }

  if (!data || !data.length) {
    return
  }

  setSelected(data.filter((item) => item.id).map((item) => item.id))
}

// Hook
function useDebounce(value: string | undefined, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

function extractPageNumber(str: string): string | null {
  const regex = /page=(\d+)/
  const match = regex.exec(str)
  if (match !== null) {
    return match[1]
  }
  return null
}

const ConvertStringToObject = (obj: any) => {
  const urlParams = new URLSearchParams(obj)
  const myObject = {}

  for (const [key, value] of urlParams) {
    if (key === 'filtter') {
      myObject[key] = JSON.parse(decodeURIComponent(value))
    } else if (key === 'sort') {
      myObject[key] = JSON.parse(decodeURIComponent(value))
    } else {
      myObject[key] = value
    }
  }

  return myObject
}

const optionAlertConfirm: any = {
  title: 'Are you sure?',
  text: 'Once deleted, you will not be able to recover this file!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
}

const addFieldsToFormData = (formData, fields) => {
  Object.keys(fields).forEach((key) => {
    formData.append(key, fields[key])
  })
}

const addFieldsToArrayFormData = (formData, fields) => {
  // formData.append('count', values.count);
  // formData.append('age', values.age);

  Object.keys(fields).forEach((key) => {
    if (!Array.isArray(fields[key])) {
      formData.append(key, fields[key])
    } else {
      // for (var i = 0; i < fields[key].length; i++) {
      //   formData.append('terminal[]', {"terminal" : fields[key][i]['terminal'] ,"voice":  fields[key][i]['voice']});
      // }
      // fields[key].forEach((item, index) => {
      //   formData.append(`terminal[]`, JSON.stringify());
      //   // formData.append(`${key}[${index}].priority`, item.priority);
      //   // formData.append(`${key}[${index}].voice`, item.voice);
      // });
    }
  })
}
export const SuccessMsg: ResponeApiCheck = {
  result: 'success',
  data: 'Proccess Successfully',
  error_description: '',
}

function deleteAttributeObjArray(obj: any, attributeName: string, arrayAttr: string): void {
  for (const item of obj[arrayAttr]) {
    delete item[attributeName]
  }
}

const calculateTimeDifference = (apiDate: string, apiTime: string): number => {
  const [apiYear, apiMonth, apiDay] = apiDate.split('-')
  const [apiHour, apiMinute, apiSecond] = apiTime.split(':')

  const apiDateTime = new Date(
    parseInt(apiYear),
    parseInt(apiMonth), // Month is zero-based
    parseInt(apiDay),
    parseInt(apiHour),
    parseInt(apiMinute),
    parseInt(apiSecond)
  )

  const currentDate = new Date()

  const timeDifference = apiDateTime.getTime() - currentDate.getTime()

  return timeDifference
}
const formatTime = (time: number): string => {
  const hours = Math.floor(time / (1000 * 60 * 60))
  const minutes = Math.floor((time / (1000 * 60)) % 60)
  const seconds = Math.floor((time / 1000) % 60)

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
  .toString()
  .padStart(2, '0')}`
}
const convertTimeToMilliseconds = (time: string): number => {
  const [hours, minutes, seconds] = time.split(':').map(Number)
  return (hours * 60 * 60 + minutes * 60 + seconds) * 1000
}
enum GenderType {
  Male = 1,
  Female = 2,
}

const Months = [
  {value: '01', text: 'January'},
  {value: '02', text: 'February'},
  {value: '03', text: 'March'},
  {value: '04', text: 'April'},
  {value: '05', text: 'May'},
  {value: '06', text: 'June'},
  {value: '07', text: 'July'},
  {value: '08', text: 'August'},
  {value: '09', text: 'September'},
  {value: '10', text: 'October'},
  {value: '11', text: 'November'},
  {value: '12', text: 'December'},
]

const checkImageSource = (src: string): boolean => {
  const image = new Image()
  image.src = src

  image.onload = () => {
    return true
  }

  image.onerror = () => {
    return false
  }

  return false
}

type Grouped<T> = {key: string; items: T[]}[]

function ArrayGroupBy<T>(array: T[], getKey: (item: T) => string): Grouped<T> {
  const groups: {[key: string]: T[]} = {}

  array.forEach((item) => {
    const key = getKey(item)
    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(item)
  })

  return Object.entries(groups).map(([key, items]) => ({key, items}))
}

export {
  createResponseContext,
  createSingleResponseContext,
  stringifyRequestQuery,
  parseRequestQuery,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  useDebounce,
  isNotEmpty,
  extractPageNumber,
  ConvertStringToObject,
  optionAlertConfirm,
  addFieldsToFormData,
  createResponseContext1,
  deleteAttributeObjArray,
  addFieldsToArrayFormData,
  calculateTimeDifference,
  formatTime,
  convertTimeToMilliseconds,
  GenderType,
  Months,
  checkImageSource,
  ArrayGroupBy,
}
