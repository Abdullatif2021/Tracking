/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { getServerGPS, getSessionGPS, getUserByToken, login } from '../core/_requests'
import { ResponeApiCheck, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { useAuth } from '../core/Auth'
import { AuthModel, UserModel } from '../core/_models'
import { useDispatch } from 'react-redux'
import { sessionActions } from '../../../../store'
import { GetUserTypes } from '../../../../services/sidebar'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    //   .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})
// email: 'admin@saas.com.sa',
// password: 'r123o123',
//driver@example.com'
const initialValues = {
  email: '',
  password: '',
}
// const initialValues = {
//   email: '9191bh',
//   password: '532091',
// }


/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        // const {data: auth} = await login(values.email, values.password)
        // saveAuth(auth)
        // const {data: user} = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
        // const {data: auth} = await login(values.email, values.password)
        // saveAuth(auth)
        // const {data: user} = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
        //certifcate session gps


        const res: ResponeApiCheck = await login(values.email, values.password)
        if (res.result == 'success') {
          var auth : AuthModel={api_token : res?.data?.token}
       
          const resposeServer = await getServerGPS();
          dispatch(sessionActions.updateServer(resposeServer));

          const resposeSession: any = await getSessionGPS();
          dispatch(sessionActions.updateUser(resposeSession));

          saveAuth(auth)
          const data: any = await getUserByToken(auth.api_token);
      
          let temp = data;
          temp['roles'] = data?.roles.map((item) => item.code)
          setCurrentUser(temp)
          dispatch(GetUserTypes());
          //   setCurrentTime(data.path[0]?.current_time)
        }
        else {
          setStatus(res.error_description)
          saveAuth(undefined)
          setSubmitting(false)
          setLoading(false)
         // alert(JSON.stringify(res.error_description))
        }
        // let res: AuthModel = {
        //   api_token: response?.data?.data?.token
        // }
        // return res



        // const resposeServer = await getServerGPS();
        // dispatch(sessionActions.updateServer(resposeServer));

        // const resposeSession: any = await getSessionGPS();
        // dispatch(sessionActions.updateUser(resposeSession));



        // saveAuth(auth)
        // const data: any = await getUserByToken(auth.api_token);
        // alert(JSON.stringify(data))
        // let temp = data;
        // temp['roles'] = data?.roles.map((item) => item.code)
        // setCurrentUser(temp)
        // dispatch(GetUserTypes());
        // //   setCurrentTime(data.path[0]?.current_time)

      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      {<div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3 fs-md-4'>Sign In</h1>
        {/* <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div> */}
      </div>}
      {/* begin::Heading */}

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
        {/* <div className='col-md-6'>
          {/* begin::Google link */}
        {/* <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
              className='h-15px me-3'
            />
            Sign in with Google
          </a> */}
        {/* end::Google link }
        </div> */}
        {/* end::Col */}

        {/* begin::Col */}
        {/* <div className='col-md-6'>
          {/* begin::Google link */}
        {/* <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
              className='theme-dark-show h-15px me-3'
            />
            Sign in with Apple
          </a> */}
        {/* end::Google link }
        </div> */}
        {/* end::Col */}
      </div>
      {/* end::Login options */}

      {/* begin::Separator */}
      {/* <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
      </div> */}
      {/* end::Separator */}

      {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          {/* <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div> }
        </div>
      )} */}

      {/* begin::Form group */}
      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>UserName</label>
        <input
          placeholder='UserName'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        {/* begin::Link */}
        {/* <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link> */}
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      {/* <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div> */}
    </form>
  )
}
