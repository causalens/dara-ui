import { faTaxi } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Taxi icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Taxi = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTaxi} {...props} />;
};

export default Taxi;
