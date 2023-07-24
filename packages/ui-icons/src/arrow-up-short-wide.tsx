import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpShortWide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpShortWide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpShortWide} {...props} />;
};

export default ArrowUpShortWide;
