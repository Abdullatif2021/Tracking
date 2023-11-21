export const PhoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export enum UserType {
  ADMIN = 'Admin',
  CAR="Cars",
  TERMINAL = 'Terminal',
  DRIVER = 'Driver',
  USER = 'User',
  OTHER="other"
}


export const SUPERVISORTYPE = 3
export const DRIVERTYPE = 2
export const STATIONTYPE = 3
export enum TerminalStatus {
  IN = 0,
  BEFORE = 1,
  AFTER = 2,
}
export const TruckPathBackgrounColors = {
  0: '#24726e',
  1: '#bebebe',
  2: '#47c1bb',
}
export const TruckPathColors = {
  0: 'white',
  1: 'white',
  2: '#5f5f5f',
}




