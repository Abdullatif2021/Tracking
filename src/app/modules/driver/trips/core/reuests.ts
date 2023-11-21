import axios from "axios"
import { TripDriverQueryResponse } from "../../accounts/core/Model"
import { ConvertStringToObject } from "../../../../../_metronic/helpers"


const getList = (id ,query: string, page: number): Promise<TripDriverQueryResponse> => {
    return axios
      .get(`trip_with_status/${id}`, {
        ...ConvertStringToObject(query),
      })
      .then((d: any) => {
        return {
          data: d.data?.data?.data,
          payload: {
            pagination: {
              page_num: d.data?.data?.current_page,
              page_size: d.data?.data?.per_page,
              links: d.data?.data?.links,
            },
          },
        }
      })
  }

  export {getList}