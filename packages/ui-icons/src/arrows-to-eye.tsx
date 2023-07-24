import { faArrowsToEye } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsToEye icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsToEye = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsToEye} {...props} />;
};

export default ArrowsToEye;
