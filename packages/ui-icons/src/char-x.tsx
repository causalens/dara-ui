import { faX } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charX icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charX = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faX} {...props} />;
};

export default charX;
