import {ResponeApiCheck} from '../../../../../_metronic/helpers'
import {MySessionDriver} from './models'
import axios, {AxiosResponse} from 'axios'

const getMySession = (): Promise<any> => {
  return axios.get(`my_session`).then((d: any) => {
    return d.data?.data
  })
}

const StartSession = (): Promise<any> => {
  return axios
    .get(`session_start`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
const StopSession = (): Promise<any> => {
  return axios
    .get(`session_stop`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
export {getMySession, StartSession,StopSession}
