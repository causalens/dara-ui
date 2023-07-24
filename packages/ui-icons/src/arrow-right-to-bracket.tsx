import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightToBracket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightToBracket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightToBracket} {...props} />;
};

export default ArrowRightToBracket;
