import { faE } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charE icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charE = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faE} {...props} />;
};

export default charE;
