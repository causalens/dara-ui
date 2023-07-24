import { faLocation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Location icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Location = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocation} {...props} />;
};

export default Location;
