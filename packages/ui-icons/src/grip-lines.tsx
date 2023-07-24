import { faGripLines } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GripLines icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GripLines = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGripLines} {...props} />;
};

export default GripLines;
