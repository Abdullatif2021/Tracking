import { useIntl } from 'react-intl';
interface props {
    value: string
}
export const Localize = (props: props) => {
    const intl = useIntl();
    const message = intl.formatMessage({ id: props.value })

    return [
        message
    ]
};