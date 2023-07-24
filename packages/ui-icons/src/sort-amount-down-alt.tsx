import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAmountDownAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAmountDownAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAmountDownAlt} {...props} />;
};

export default SortAmountDownAlt;
