import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BezierCurve icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BezierCurve = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBezierCurve} {...props} />;
};

export default BezierCurve;
