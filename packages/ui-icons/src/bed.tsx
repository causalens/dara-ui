import { faBed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBed} {...props} />;
};

export default Bed;
