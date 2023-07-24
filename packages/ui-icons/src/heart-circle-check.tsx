import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCircleCheck} {...props} />;
};

export default HeartCircleCheck;
