import { UserType } from "../../../../_metronic/utlis/constants"

export interface AuthModel {
  api_token: string
  refreshToken?: string
}

export interface UserAddressModel {
  addressLine: string
  city: string
  state: string
  postCode: string
}

export interface UserCommunicationModel {
  email: boolean
  sms: boolean
  phone: boolean
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean
  sendCopyToPersonalEmail?: boolean
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean
    youAreSentADirectMessage?: boolean
    someoneAddsYouAsAsAConnection?: boolean
    uponNewOrder?: boolean
    newMembershipApproval?: boolean
    memberRegistration?: boolean
  }
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
    tipsOnGettingMoreOutOfKeen?: boolean
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean
    tipsOnStartBusinessProducts?: boolean
  }
}

export interface UserSocialNetworksModel {
  linkedIn: string
  facebook: string
  twitter: string
  instagram: string
}

export interface UserModel {
  id: number
  username?: string
  password?: string | undefined
  email: string
  first_name?: string
  last_name?: string
  fullname?: string
  occupation?: string
  companyName?: string
  phone?: string
  roles?: Array<string>
  pic?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  website?: 'https://keenthemes.com'
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  communication?: UserCommunicationModel
  address?: UserAddressModel
  socialNetworks?: UserSocialNetworksModel

  //add new 


  name: string
  type: UserType,
  current_time :string ,
  ads ?:any [],
  prn:number,
 

}



export interface SessionGpsModel {
  id: number,
  attributes: any
  name: string
  login?: any
  email: string,
  phone?: string,
  readonly?: boolean
  administrator: boolean
  map?: any
  latitude?: any
  longitude?: any
  zoom?: any
  twelveHourFormat?: boolean
  coordinateFormat?: any
  disabled?: boolean
  expirationTime?: any
  deviceLimit?: any
  userLimit: number
  deviceReadonly: boolean
  limitCommands: boolean
  disableReports: boolean
  fixedEmail: boolean
  poiLayer?: any
  password?: any
}
