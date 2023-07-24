import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpFromBracket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpFromBracket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpFromBracket} {...props} />;
};

export default ArrowUpFromBracket;
