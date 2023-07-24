import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnglesDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnglesDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnglesDown} {...props} />;
};

export default AnglesDown;
