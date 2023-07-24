import { faShapes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shapes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shapes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShapes} {...props} />;
};

export default Shapes;
