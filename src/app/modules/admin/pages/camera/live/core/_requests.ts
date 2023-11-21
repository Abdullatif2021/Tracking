import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {ConvertStringToObject, ID, ResponeApiCheck} from '../../../../../../../_metronic/helpers'
import {CameraInfoQueryResponse} from './_models'
import {default as CryptoJS, HmacSHA256} from 'crypto-js'

const StringToSignature = (url: string): string => {
  var appSecret = 'zyrz9MneU7iLVYt0Dmv3'
  var textToSign = `POST\napplication/json\napplication/json\n/artemis${url}`
  var hash = HmacSHA256(textToSign, appSecret)
  return hash.toString(CryptoJS.enc.Base64)
}

const axiosForArtemis = axios.create({
  baseURL: '/artemis',
})

const getInfo = (
  pageNo: number = 1,
  pageSize: number = 10,
  siteIndexCode: string = '0',
  deviceType: string = 'encodeDevice',
  bRecordSetting: number = 1
) => {
  return axiosForArtemis
  .post(
    `/api/resource/v1/cameras`,
    {
      pageNo,
      pageSize,
      siteIndexCode,
      deviceType,
      bRecordSetting,
    },
    {
      headers: {
        'X-Ca-Key': process.env.REACT_APP_HIKECENTRAL_APP_KEY,
        'X-Ca-Signature': StringToSignature('/api/resource/v1/cameras'),
      },
    }
  )
  .then((d: any) => {
    return {data: d}
  })
  .catch((err) => {
    console.log('err >> ', err)
    return err
  })
}

const getLiveCamera = (
  cameraIndexCode: string = '1',
  streamType: number = 0,
  protocol: string = 'hls',
  transmode: number = 1,
  requestWebsocketProtocol: number = 0
) => {
  return axiosForArtemis
  .post(
    `/api/video/v1/cameras/previewURLs`,
    {
      cameraIndexCode,
      streamType,
      protocol,
      transmode,
      requestWebsocketProtocol,
    },
    {
      headers: {
        'X-Ca-Key': process.env.REACT_APP_HIKECENTRAL_APP_KEY,
        'X-Ca-Signature': StringToSignature('/api/video/v1/cameras/previewURLs'),
      },
    }
  )
  .then((d: any) => {
    return {data: d}
  })
  .catch((err) => {
    console.log('err >> ', err)
    return err
  })
}

export {getInfo, getLiveCamera}

// const getList = (query: string, page: number): Promise<CameraQueryResponse> => {
//   return axios
//     .post(`list_camera?${'page=' + page}`, {
//       ...ConvertStringToObject(query)
//     })
//     .then((d: any) => {
//       return {
//         data: d.data?.data?.data,
//         payload: {
//           pagination: {
//             page_num: d.data?.data?.current_page,
//             page_size: d.data?.data?.per_page,
//             links: d.data?.data?.links
//           }
//         }
//       }
//     })
// }

// const addCameraToVehicle = (object: AddCameraVehicle) => {
//   return axios
//     .post('store_camera', object)
//     .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
// }

// const getCameraToVehicle = (id: ID): Promise<CameraVehicleResponse> => {
//   return axios
//     .post(`view_camera/${id}`)
//     .then((response: AxiosResponse<ResponeApiCheck>) => response.data?.data)
// }

// export { getList, addCameraToVehicle,getCameraToVehicle }
