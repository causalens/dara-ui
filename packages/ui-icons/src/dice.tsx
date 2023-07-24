import { faDice } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dice icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dice = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDice} {...props} />;
};

export default Dice;
