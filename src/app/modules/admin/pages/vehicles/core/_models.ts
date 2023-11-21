
import { Response } from "../../../../../../_metronic/helpers"
export type SelectList = {
  value: any,
  text: string,

}

export type SelectListQueryResponse = Response<Array<SelectList>>

export const initialVehicleModel: SelectList = {
  "value": null,
  "text": null

}

