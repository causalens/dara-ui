import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRotateLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRotateLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRotateLeft} {...props} />;
};

export default ArrowRotateLeft;
