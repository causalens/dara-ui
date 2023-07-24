import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnglesRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnglesRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnglesRight} {...props} />;
};

export default AnglesRight;
