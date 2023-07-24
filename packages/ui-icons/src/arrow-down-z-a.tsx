import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownZA icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownZA = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownZA} {...props} />;
};

export default ArrowDownZA;
