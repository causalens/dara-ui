import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRotateRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRotateRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRotateRight} {...props} />;
};

export default ArrowRotateRight;
