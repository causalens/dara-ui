import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToggleOn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToggleOn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToggleOn} {...props} />;
};

export default ToggleOn;
