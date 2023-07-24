import { faHouseLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseLock} {...props} />;
};

export default HouseLock;
