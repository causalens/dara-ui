import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PaintRoller icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PaintRoller = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaintRoller} {...props} />;
};

export default PaintRoller;
