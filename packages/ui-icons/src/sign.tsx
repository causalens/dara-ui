import { faSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSign} {...props} />;
};

export default Sign;
