import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpWideShort icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpWideShort = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpWideShort} {...props} />;
};

export default ArrowUpWideShort;
