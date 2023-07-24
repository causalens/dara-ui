import { faBusAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BusAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BusAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBusAlt} {...props} />;
};

export default BusAlt;
