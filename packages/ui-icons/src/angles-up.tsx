import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnglesUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnglesUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnglesUp} {...props} />;
};

export default AnglesUp;
