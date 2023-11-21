import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Path = {
  id: number
  name: string
  count: string
  path_terminal: any[]
}

export type PathQueryResponse = Response<Array<Path>>

export const initialPathModel: Path = {
  id: null,
  name: null,
  count: '',
  path_terminal: [
    {
      terminal: null,
      priority: null,
      voice: null,
    },
  ],
}

export type AddPath = {
  name:string,
  count: number,
  terminal: any[
    
  ]
}

export const AddinitialPathModel: AddPath = {
  name: null,
  count: null,
  terminal: [
    {
      terminal: null,
      priority: null,
      voice: null,
      voice_file:null,
    },
  ],
}
export const prorities = [
  {
    value: 1,
    text: '1',
  },
  {
    value: 2,
    text: '2',
  },
  {
    value: 3,
    text: '3',
  },
  {
    value: 4,
    text: '4',
  }
  ,
  {
    value: 5,
    text: '5',
  },
  ,
  {
    value: 6,
    text: '6',
  },
  ,
  {
    value: 7,
    text: '7',
  },
  ,
  {
    value: 8,
    text: '8',
  },
  ,
  {
    value: 9,
    text: '9',
  },
  ,
  {
    value: 10,
    text: '10',
  },
]
