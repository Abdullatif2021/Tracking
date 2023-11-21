import {Dispatch, SetStateAction} from 'react'

export type ID = undefined | null | number

export type ResponeApiCheck = {
  data: any
  error_description: string | null
  result: 'success' | 'error'
}

export type PaginationState = {
  //page: number
  //items_per_page: 10 | 30 | 50 | 100,
  page_num?: number
  page_size?: number
  links?: Array<{label: string; active: boolean; url: string | null; page: number | null}>
}

export type SortState = {
  sort?: any
  order?: 'asc' | 'desc'
}

export type FilterState = {
  filtter?: unknown
}

export type SearchState = {
  search?: string
}

export type Response<T> = {
  data?: T
  payload?: {
    message?: string
    errors?: {
      [key: string]: Array<string>
    }
    pagination?: PaginationState
  }
}

export type QueryState = PaginationState & SortState & FilterState & SearchState

export type QueryRequestContextProps = {
  state: QueryState
  updateState: (updates: Partial<QueryState>) => void
}

export const initialQueryState: QueryState = {
  page_num: 1,
  page_size: 5,
}

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {},
}

export type QueryResponseContextProps<T> = {
  response?: Response<Array<T>> | undefined
  refetch: () => void
  isLoading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  query: string
  path_id?: number
}
export type QueryResponseContextProps1<T> = {
  response?: Response<Array<T>> | undefined
  refetch: () => void
  isLoading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  query: string
}

export type QuerySingleResponseContextProps<T> = {
  response?: Response<T> | undefined
  refetch: () => void
  isLoading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  query: string
  path_id?: number
}

export const initialQueryResponse = {
  refetch: () => {},
  isLoading: false,
  setLoading: () => {},
  query: '',
  path_id: 0,
}

export const initialQueryResponse1 = {
  refetch: () => {},
  isLoading: false,
  setLoading: () => {},
  query: '',
  path_id: 0,
}

export type ListViewContextProps = {
  selected: Array<ID>
  onSelect: (selectedId: ID) => void
  onSelectAll: () => void
  clearSelected: () => void
  // NULL => (CREATION MODE) | MODAL IS OPENED
  // NUMBER => (EDIT MODE) | MODAL IS OPENED
  // UNDEFINED => MODAL IS CLOSED
  itemIdForUpdate?: ID
  setItemIdForUpdate: Dispatch<SetStateAction<ID>>
  // setItemIdForDelete: Dispatch<SetStateAction<ID>>
  itemIdForDelete?: ID
  isAllSelected: boolean
  disabled: boolean
  // confirmDialogOpen: boolean,
  // setConfirmDialogOpen: Dispatch<SetStateAction<boolean>>,
}

export const initialListView: ListViewContextProps = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false,
  // confirmDialogOpen: false,
  // setConfirmDialogOpen: () => { },
  // setItemIdForDelete: () => { },
}

export const initialResponseError: ResponeApiCheck = {
  data: '',
  error_description: '',
  result: 'error',
}

export type SelectList = {
  value: any
  text: string
}
export type SelectListStringValues = {
  value: any
  text: string
}
export type SelectListQueryResponse = Response<Array<SelectList>>

export const initialVehicleModel: SelectList = {
  value: null,
  text: null,
}
