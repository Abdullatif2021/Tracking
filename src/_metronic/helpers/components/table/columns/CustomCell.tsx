import { FC } from 'react'

type Props = {
    data?: string
}
const CustomCell: FC<Props> = ({ data }) => (
  <>
    {data}
  </>
)

export { CustomCell }
