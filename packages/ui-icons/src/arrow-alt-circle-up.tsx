import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowAltCircleUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowAltCircleUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowAltCircleUp} {...props} />;
};

export default ArrowAltCircleUp;
