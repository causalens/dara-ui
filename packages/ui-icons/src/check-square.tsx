import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CheckSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CheckSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCheckSquare} {...props} />;
};

export default CheckSquare;
