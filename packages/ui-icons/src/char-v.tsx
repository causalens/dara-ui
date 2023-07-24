import { faV } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charV icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charV = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faV} {...props} />;
};

export default charV;
