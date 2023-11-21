import axios from "axios"
import { ID } from "../../../../../../_metronic/helpers"
import { SelectList } from "../../core/models"

const getRegionsBytype = (type_id:ID): Promise<SelectList[]> => {
    return axios
        .get(`list_active_region_type/${type_id}`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
  }
  export { getRegionsBytype}
