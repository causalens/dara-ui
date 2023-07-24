import { faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GreaterThanEqual icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GreaterThanEqual = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGreaterThanEqual} {...props} />;
};

export default GreaterThanEqual;
