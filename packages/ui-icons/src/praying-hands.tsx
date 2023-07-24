import { faPrayingHands } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PrayingHands icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PrayingHands = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPrayingHands} {...props} />;
};

export default PrayingHands;
