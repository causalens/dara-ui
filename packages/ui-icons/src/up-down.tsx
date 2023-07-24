import { faUpDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UpDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UpDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUpDown} {...props} />;
};

export default UpDown;
