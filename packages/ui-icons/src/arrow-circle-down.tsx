import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowCircleDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowCircleDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowCircleDown} {...props} />;
};

export default ArrowCircleDown;
