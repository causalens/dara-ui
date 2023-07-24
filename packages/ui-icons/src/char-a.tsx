import { faA } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charA icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charA = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faA} {...props} />;
};

export default charA;
