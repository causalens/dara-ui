import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsToDot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsToDot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsToDot} {...props} />;
};

export default ArrowsToDot;
