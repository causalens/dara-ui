import { faShield } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shield icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shield = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShield} {...props} />;
};

export default Shield;
