import { faH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faH} {...props} />;
};

export default charH;
