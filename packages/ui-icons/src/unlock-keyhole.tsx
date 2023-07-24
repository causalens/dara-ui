import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UnlockKeyhole icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UnlockKeyhole = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUnlockKeyhole} {...props} />;
};

export default UnlockKeyhole;
