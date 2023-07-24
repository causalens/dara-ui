import { faBlender } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Blender icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Blender = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBlender} {...props} />;
};

export default Blender;
