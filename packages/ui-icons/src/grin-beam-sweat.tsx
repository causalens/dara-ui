import { faGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinBeamSweat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinBeamSweat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinBeamSweat} {...props} />;
};

export default GrinBeamSweat;
