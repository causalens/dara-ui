import { faMultiply } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Multiply icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Multiply = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMultiply} {...props} />;
};

export default Multiply;
