interface Props {
    title: string,
    value: boolean,

}
const CheckBoxDetail = (props: Props) => {
    const { title, value } = props;
    return (
        <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>{title}</label>

            <div className='col-lg-8'>
                {value ? <div className='badge badge-light-success fw-bolder'>Enabled</div>
                    : <div className=' badge badge-danger fw-bolder'>Disabled</div>}

            </div>
        </div>
    );
}

export default CheckBoxDetail;
