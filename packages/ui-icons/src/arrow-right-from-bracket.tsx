import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightFromBracket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightFromBracket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightFromBracket} {...props} />;
};

export default ArrowRightFromBracket;
