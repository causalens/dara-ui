import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowCircleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowCircleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowCircleLeft} {...props} />;
};

export default ArrowCircleLeft;
