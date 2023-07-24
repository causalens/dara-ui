import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowCircleUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowCircleUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowCircleUp} {...props} />;
};

export default ArrowCircleUp;
