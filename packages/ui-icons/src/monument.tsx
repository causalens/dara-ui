import { faMonument } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Monument icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Monument = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMonument} {...props} />;
};

export default Monument;
