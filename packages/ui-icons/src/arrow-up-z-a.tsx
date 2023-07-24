import { faArrowUpZA } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpZA icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpZA = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpZA} {...props} />;
};

export default ArrowUpZA;
