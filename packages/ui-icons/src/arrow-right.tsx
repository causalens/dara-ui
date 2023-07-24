import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRight} {...props} />;
};

export default ArrowRight;
