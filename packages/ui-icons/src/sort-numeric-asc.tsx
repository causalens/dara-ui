import { faSortNumericAsc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortNumericAsc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortNumericAsc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortNumericAsc} {...props} />;
};

export default SortNumericAsc;
