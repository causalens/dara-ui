import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowAltCircleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowAltCircleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowAltCircleLeft} {...props} />;
};

export default ArrowAltCircleLeft;
