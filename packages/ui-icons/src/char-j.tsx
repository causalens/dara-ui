import { faJ } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charJ icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charJ = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJ} {...props} />;
};

export default charJ;
