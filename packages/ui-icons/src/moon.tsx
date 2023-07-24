import { faMoon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Moon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Moon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoon} {...props} />;
};

export default Moon;
