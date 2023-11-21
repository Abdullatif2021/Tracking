import {FC} from 'react'
interface Props {
  title: string
  onCLick: () =>void,
}
export const MenuActionItem: FC<Props> = ({title, onCLick}) => {
  return (
    <div className='menu-item px-3' >
      <a className='menu-link px-3' onClick={onCLick} >
        {title}
      </a>
    </div>
  )
}
