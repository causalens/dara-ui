import { faCloud } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cloud icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cloud = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloud} {...props} />;
};

export default Cloud;
