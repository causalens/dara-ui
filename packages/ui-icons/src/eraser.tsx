import { faEraser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Eraser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Eraser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEraser} {...props} />;
};

export default Eraser;
