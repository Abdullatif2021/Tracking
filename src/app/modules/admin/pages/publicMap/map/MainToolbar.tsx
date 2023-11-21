import  { useRef} from 'react'
import {useSelector} from 'react-redux'
import {
  Toolbar,
} from '@mui/material'
import {makeStyles, useTheme} from '@mui/styles'
import { KTIcon } from '../../../../../../_metronic/helpers'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
  },

}))

const MainToolbar = ({
  keyword,
  setKeyword,
}) => {
  const classes = useStyles()
  const toolbarRef = useRef()
  return (
    <Toolbar ref={toolbarRef} className={classes.toolbar}>
      <div className='card-title'>
        <div className='d-flex align-items-center position-relative my-1'>
          {<KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />}
          <input
            type='text'
            data-kt-user-table-filter='search'
            className='form-control form-control-solid w-250px ps-14'
            placeholder='Search user'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
    </Toolbar>
  )
}

export default MainToolbar
