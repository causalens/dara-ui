import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceMeh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceMeh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceMeh} {...props} />;
};

export default FaceMeh;
