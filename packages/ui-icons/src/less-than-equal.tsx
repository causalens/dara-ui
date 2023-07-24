import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LessThanEqual icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LessThanEqual = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLessThanEqual} {...props} />;
};

export default LessThanEqual;
