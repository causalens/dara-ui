import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TriangleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TriangleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTriangleExclamation} {...props} />;
};

export default TriangleExclamation;
