import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCrack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCrack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCrack} {...props} />;
};

export default HeartCrack;
