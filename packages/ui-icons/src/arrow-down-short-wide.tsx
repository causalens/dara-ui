import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownShortWide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownShortWide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownShortWide} {...props} />;
};

export default ArrowDownShortWide;
