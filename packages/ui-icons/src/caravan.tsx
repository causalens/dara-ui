import { faCaravan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Caravan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Caravan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaravan} {...props} />;
};

export default Caravan;
