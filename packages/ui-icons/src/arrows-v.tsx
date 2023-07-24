import { faArrowsV } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsV icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsV = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsV} {...props} />;
};

export default ArrowsV;
