import { faZ } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charZ icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charZ = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faZ} {...props} />;
};

export default charZ;
