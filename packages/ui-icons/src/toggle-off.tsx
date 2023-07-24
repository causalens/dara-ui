import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToggleOff icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToggleOff = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToggleOff} {...props} />;
};

export default ToggleOff;
