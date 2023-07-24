import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UnlockAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UnlockAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUnlockAlt} {...props} />;
};

export default UnlockAlt;
