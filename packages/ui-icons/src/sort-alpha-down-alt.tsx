import { faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAlphaDownAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAlphaDownAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAlphaDownAlt} {...props} />;
};

export default SortAlphaDownAlt;
