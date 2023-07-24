import { faHardOfHearing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HardOfHearing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HardOfHearing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHardOfHearing} {...props} />;
};

export default HardOfHearing;
