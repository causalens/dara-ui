import { faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAlphaUpAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAlphaUpAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAlphaUpAlt} {...props} />;
};

export default SortAlphaUpAlt;
