import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRotateBackward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRotateBackward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRotateBackward} {...props} />;
};

export default ArrowRotateBackward;
