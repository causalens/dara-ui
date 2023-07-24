import { faSortAlphaAsc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAlphaAsc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAlphaAsc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAlphaAsc} {...props} />;
};

export default SortAlphaAsc;
