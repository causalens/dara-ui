import { faSortAsc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAsc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAsc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAsc} {...props} />;
};

export default SortAsc;
