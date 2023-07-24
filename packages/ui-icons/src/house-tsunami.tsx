import { faHouseTsunami } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseTsunami icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseTsunami = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseTsunami} {...props} />;
};

export default HouseTsunami;
