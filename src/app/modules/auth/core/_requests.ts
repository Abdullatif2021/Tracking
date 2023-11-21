import axios, { AxiosResponse } from 'axios'
import { AuthModel, SessionGpsModel, UserModel } from './_models'
import { ResponeApiCheck } from '../../../../_metronic/helpers'
const APP_TRUCKGPS_API_URL = process.env.REACT_APP_TRUCKGPS_API_URL
const API_URL = process.env.REACT_APP_API_URL

//export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
//export const LOGIN_URL = `${API_URL}/login`

export const GET_USER_BY_ACCESSTOKEN_URL = `/start_auth`
export const LOGIN_URL = `/login`

export const REGISTER_URL = `/register`
export const REQUEST_PASSWORD_URL = `/forgot_password`

//update
// Server should return AuthModel
// export function login(email: string, password: string) {
//   return axios.post<AuthModel>(LOGIN_URL, {
//     email,
//     password,
//   })
// }

// Server should return AuthModel
export async function login(email: string, password: string) {
  return  axios.post(LOGIN_URL, {
    email,
    password,
  }).then((response: AxiosResponse<ResponeApiCheck>) => response.data);

}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}

// export function getUserByToken(token: string) {
//   return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
//     api_token: token,
//   })
// }
export async function getUserByToken(token: string): Promise<any> {
  const response: any = await axios.post(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  });

  let res = response?.data?.data;
  return res
}
//${APP_TRUCKGPS_API_URL}
//${APP_TRUCKGPS_API_URL}/

export async function getSessionGPS(): Promise<SessionGpsModel> {

  const response: any = await fetch(`${APP_TRUCKGPS_API_URL}/session`, {

    method: "POST",
    body: new URLSearchParams(
      `email=${encodeURIComponent(
        "test@test.test"
      )}&password=${encodeURIComponent("test")}`
    ),
  });

  let res: SessionGpsModel = await response.json();
  return res
}


export async function getServerGPS(): Promise<any> {
  let email = "test@test.test";
  let password = "test";
  const auth1: any = btoa(`${email}:${password}`);

  const response: any = await fetch(`${APP_TRUCKGPS_API_URL}/server`, {

    credentials: 'include',
    headers: {
      Authorization: `Basic ${auth1}`,
    },
  });

  let res = await response.json();
  return res
}