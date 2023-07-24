import { faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiamondTurnRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiamondTurnRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiamondTurnRight} {...props} />;
};

export default DiamondTurnRight;
