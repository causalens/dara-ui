import { faC } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charC icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charC = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faC} {...props} />;
};

export default charC;
