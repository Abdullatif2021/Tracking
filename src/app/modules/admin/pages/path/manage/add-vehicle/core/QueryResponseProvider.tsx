/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FC, useContext, useState, useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'
import {
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  PaginationState,
  QUERIES,
  stringifyRequestQuery,
  WithChildren,
} from '../../../../../../../../_metronic/helpers'

import { getList } from './_requests'
import { VehiclePath } from './_models'
import { useQueryRequest } from './QueryRequestProvider'


const QueryResponseContext = createResponseContext<VehiclePath>(initialQueryResponse)
const QueryResponseProvider: FC<any> = ({ children, path_id }) => {

  const { state } = useQueryRequest()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<string>(stringifyRequestQuery(state))
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])

  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery)
    }
  }, [updatedQuery])

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.ALL_PATH_VEHICLES__LIST_VALUES}`,
    () => {
      return getList(query, state.page_num, path_id)
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  return (
    <QueryResponseContext.Provider value={{ isLoading: isFetching || isLoading, setLoading, refetch, response, query,path_id }}>
      {children}
    </QueryResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
  const { response,path_id } = useQueryResponse()
  if (!response) {
    return []
  }

  return response?.data.map((item) => {
    return {
      ...item,
      path_id: path_id
    }
  }) || []
}

const useQueryResponsePagination = () => {
  const defaultPaginationState: PaginationState = {
    links: [],
    ...initialQueryState,
  }

  const { response } = useQueryResponse()
  if (!response || !response.payload || !response.payload.pagination) {
    return defaultPaginationState
  }

  return response.payload.pagination
}

const useQueryResponseLoading = (): boolean => {
  const { isLoading } = useQueryResponse()
  return isLoading
}
const useQueryResponseSetLoading = () => {
  const { setLoading } = useQueryResponse()
  return setLoading
}
export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponsePagination,
  useQueryResponseLoading,
  useQueryResponseSetLoading
}
