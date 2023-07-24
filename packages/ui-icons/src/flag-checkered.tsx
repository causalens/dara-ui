import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FlagCheckered icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FlagCheckered = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlagCheckered} {...props} />;
};

export default FlagCheckered;
