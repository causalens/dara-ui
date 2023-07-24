import { faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TriangleCircleSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TriangleCircleSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTriangleCircleSquare} {...props} />;
};

export default TriangleCircleSquare;
