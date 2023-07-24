import { faHeartCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCircleExclamation} {...props} />;
};

export default HeartCircleExclamation;
