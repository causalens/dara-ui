import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareCheck} {...props} />;
};

export default SquareCheck;
