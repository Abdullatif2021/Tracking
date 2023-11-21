import { useToasts } from 'react-toast-notifications';
import { ResponeApiCheck } from '../helpers/crud-helper/models';



export function useNotification() {
  const { addToast } = useToasts();

  const showNotification = (props: ResponeApiCheck) => {
    const appearance = props.result == 'success' ? 'success' : 'error';
    addToast(props.result == 'success' ? props.data : props.error_description, {
      autoDismissTimeout: 5000,
      appearance
    });
  };

  return { showNotification };
}
