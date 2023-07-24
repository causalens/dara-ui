import { faClock } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Clock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Clock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClock} {...props} />;
};

export default Clock;
