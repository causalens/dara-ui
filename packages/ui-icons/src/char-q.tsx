import { faQ } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charQ icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charQ = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQ} {...props} />;
};

export default charQ;
