import { faBox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Box icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Box = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBox} {...props} />;
};

export default Box;
