import {Loading} from 'Components';
import Loadable from 'react-loadable';


export default (chunk) => {
    return Loadable({
        loader: chunk,
        loading: Loading
    });
}
