import { faSortDesc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortDesc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortDesc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortDesc} {...props} />;
};

export default SortDesc;
