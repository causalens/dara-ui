import { faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAmountAsc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAmountAsc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAmountAsc} {...props} />;
};

export default SortAmountAsc;
