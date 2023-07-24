import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SearchMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SearchMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSearchMinus} {...props} />;
};

export default SearchMinus;
