import { faDiamond } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Diamond icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Diamond = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiamond} {...props} />;
};

export default Diamond;
