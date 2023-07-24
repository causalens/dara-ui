import { faBoxes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Boxes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Boxes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxes} {...props} />;
};

export default Boxes;
