
import axios from 'axios'
import { SelectList } from './models'
import { ID } from '../../../../../_metronic/helpers'


const getRegiosList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_region`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
}


const getPassengers = (): Promise<SelectList[]> => {
    return axios
        .get(`list_passenger`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        })
}


const getShiftList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_shift`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        })
}


const getVehicleList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_vehicles`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        })
}
const getDeviceList = (): Promise<SelectList[]> => {
    return axios
        .get(`vehicles_use_report`)
        .then((d: any) => {
            return d.data?.data
        })
}


const getDriverList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_driver`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        })
}

const getGroupListByRegion = (regio_id :ID): Promise<SelectList[]> => {
    return axios
        .get(`all_group_region/${regio_id}`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
}


const getCountryList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_country`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
}

const getTerminalList = (): Promise<SelectList[]> => {
    return axios
        .get(`all_terminal`)
        .then((d: any) => {
            return d.data?.data
        })
}

const getAdsList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_ads`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.name
                }
            })
        })
}





const getVehiclePathList = (id): Promise<SelectList[]> => {
    return axios
        .get(`all_vehicles_path/${id}`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.license_plate
                }
            })
        })
}

const getVehicleGroupList = (): Promise<SelectList[]> => {
    return axios
        .get(`all_vehicles_group`)
        .then((d: any) => {
            return d.data?.data;
        })
}
const getCityList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_city`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
}

const getReasonCancelList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_reason_cancel`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.reason
                }
            })
        })
}

const getGroupList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_group`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
}
const getBuildingListList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_building`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.parent,
                    text: item.name
                }
            })
        })
}

const getReasonCarOutServiceList = (): Promise<SelectList[]> => {
    return axios
        .get(`list_active_reason_out_of_service`)
        .then((d: any) => {
            return d.data?.data.map((item) => {
                return {
                    value: item.id,
                    text: item.reason
                }
            })
        })
}
export { getRegiosList, getPassengers,getShiftList,
    getVehicleList,getGroupListByRegion,
    getDriverList,getCountryList ,getTerminalList,getVehiclePathList,
    getAdsList,getVehicleGroupList,getCityList,getGroupList,
    getBuildingListList,getReasonCancelList,getDeviceList,
    getReasonCarOutServiceList}
