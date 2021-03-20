import spinner from '../../../assets/spinner.gif';
import { SpinnerImage } from './styles';

const Spinner = ({ ...props }) => {
    return (
        <SpinnerImage src={ spinner } alt="spinner" />
    )
}

export default Spinner;