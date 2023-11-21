/* eslint-disable react/jsx-no-target-blank */
import {useAuth} from '../../../../../app/modules/auth'
import { AdminMenu } from './AdminMenu'
import { UserType } from '../../../../utlis/constants'
import { DriverMenu } from './DriverMenu'
import { PilotMenu } from './PilotMenu'

const SidebarMenuMain = () => {
  const {currentUser} = useAuth()
  return (
    <>
       {currentUser.type == UserType.ADMIN &&  <AdminMenu/> }
       {currentUser.type == UserType.DRIVER &&  <DriverMenu/> }
       {currentUser.type  ==UserType.OTHER   &&  <PilotMenu/> }
       
      
    </>
  )
}

export {SidebarMenuMain}
