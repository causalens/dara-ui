import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowAltCircleDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowAltCircleDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowAltCircleDown} {...props} />;
};

export default ArrowAltCircleDown;
