import { faSortAlphaDesc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAlphaDesc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAlphaDesc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAlphaDesc} {...props} />;
};

export default SortAlphaDesc;
