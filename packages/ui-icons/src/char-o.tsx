import { faO } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charO icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charO = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faO} {...props} />;
};

export default charO;
