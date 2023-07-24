import { faLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Lock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Lock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLock} {...props} />;
};

export default Lock;
