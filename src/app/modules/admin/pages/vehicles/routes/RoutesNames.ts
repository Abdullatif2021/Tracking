import { PageLink } from "../../../../../../_metronic/layout/core";

const Vechiles = '/admin/vehicles/';


export const ListVehiclesPath = Vechiles + 'manage-vehicles';
export const AddVehiclesPath = Vechiles + 'add-vehicle';
export const EditVehiclesPath = Vechiles + 'edit-vehicle';
export const ViewVehiclesPath = Vechiles + 'view-vehicle';
export const AccountVehiclesPath = Vechiles + 'account-vehicle';


export const ListTypesPath = Vechiles + 'vehicle-types';
export const AddTypesPath = Vechiles + 'add-vehicle-types';
export const EditTypesPath = Vechiles + 'edit-vehicle-types';

export const ListMakerPath = Vechiles + 'vehicle-makers';
export const AddMakerPath = Vechiles + 'add-vehicle-makers';
export const EditMakerPath = Vechiles + 'edit-vehicle-makers';






export const ListModelsPath = Vechiles + 'vehicle-models';
export const AddModelPath = Vechiles + 'add-vehicle-models';
export const EditModelPath = Vechiles + 'edit-vehicle-models';


export const ListColorsPath = Vechiles + 'vehicle-colors';
export const AddColorPath = Vechiles + 'add-vehicle-colors';
export const EditColorPath = Vechiles + 'edit-vehicle-colors';

export const ListGroupsPath = Vechiles + 'vehicle-groups';
export const AddGroupPath = Vechiles + 'add-vehicle-groups';
export const EditGroupsPath = Vechiles + 'edit-vehicle-groups';


export const vehiclesBreadcrumbs: Array<PageLink> = [
    {
        title: 'Manage Vehicle',
        path: ListVehiclesPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

export const groupsBreadcrumbs: Array<PageLink> = [
    {
        title: 'Vehicle Groups',
        path: ListGroupsPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]
export const VehiclesBreadcrumbs: Array<PageLink> = [
    {
        title: 'Manage Vehicles',
        path: ListVehiclesPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]
export const typesBreadcrumbs: Array<PageLink> = [
    {
        title: 'Vehicle Types',
        path: ListTypesPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

export const colorsBreadcrumbs: Array<PageLink> = [
    {
        title: 'Vehicle Colors',
        path: ListColorsPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

export const makersBreadcrumbs: Array<PageLink> = [
    {
        title: 'Vehicle Makers',
        path: ListMakerPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

export const modelssBreadcrumbs: Array<PageLink> = [
    {
        title: 'Vehicle Models',
        path: ListModelsPath,
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]
