import { faFistRaised } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FistRaised icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FistRaised = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFistRaised} {...props} />;
};

export default FistRaised;
