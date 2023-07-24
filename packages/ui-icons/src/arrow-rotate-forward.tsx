import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRotateForward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRotateForward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRotateForward} {...props} />;
};

export default ArrowRotateForward;
