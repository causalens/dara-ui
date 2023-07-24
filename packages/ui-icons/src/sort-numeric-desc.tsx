import { faSortNumericDesc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortNumericDesc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortNumericDesc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortNumericDesc} {...props} />;
};

export default SortNumericDesc;
