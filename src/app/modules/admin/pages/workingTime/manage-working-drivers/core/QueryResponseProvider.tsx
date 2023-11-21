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
} from '../../../../../../../_metronic/helpers'
import { getList } from './_requests'
import { DriverWorkingTime } from './_models'
import { useQueryRequest } from './QueryRequestProvider'


const QueryResponseContext = createResponseContext<DriverWorkingTime>(initialQueryResponse)
const QueryResponseProvider: FC<WithChildren> = ({ children }) => {

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
    `${QUERIES.WORKING_CARS_DAYS_LIST_VALUES}-${query}`,
    () => {
      return getList(query)
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  return (
    <QueryResponseContext.Provider value={{ isLoading: isFetching || isLoading, setLoading, refetch, response, query }}>
      {children}
    </QueryResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
  const { response } = useQueryResponse()
  if (!response) {
    return []
  }
  return response?.data || []
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
  useQueryResponseLoading,
  useQueryResponseSetLoading
}
