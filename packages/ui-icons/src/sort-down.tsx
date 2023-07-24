import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortDown} {...props} />;
};

export default SortDown;
