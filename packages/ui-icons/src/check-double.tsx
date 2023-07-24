import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CheckDouble icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CheckDouble = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCheckDouble} {...props} />;
};

export default CheckDouble;
