import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SearchDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SearchDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSearchDollar} {...props} />;
};

export default SearchDollar;
