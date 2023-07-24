import { faAnchorLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnchorLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnchorLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnchorLock} {...props} />;
};

export default AnchorLock;
