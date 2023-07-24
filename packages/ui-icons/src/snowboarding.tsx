import { faSnowboarding } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Snowboarding icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Snowboarding = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSnowboarding} {...props} />;
};

export default Snowboarding;
