import { faSortAmountDesc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAmountDesc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAmountDesc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAmountDesc} {...props} />;
};

export default SortAmountDesc;
