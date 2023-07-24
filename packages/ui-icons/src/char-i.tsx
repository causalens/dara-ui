import { faI } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charI icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charI = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faI} {...props} />;
};

export default charI;
