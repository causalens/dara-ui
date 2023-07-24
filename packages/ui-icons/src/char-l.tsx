import { faL } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charL icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charL = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faL} {...props} />;
};

export default charL;
