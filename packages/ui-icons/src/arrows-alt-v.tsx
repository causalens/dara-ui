import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsAltV icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsAltV = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsAltV} {...props} />;
};

export default ArrowsAltV;
