import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightArrowLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightArrowLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightArrowLeft} {...props} />;
};

export default ArrowRightArrowLeft;
