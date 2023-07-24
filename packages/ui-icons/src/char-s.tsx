import { faS } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charS icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charS = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faS} {...props} />;
};

export default charS;
