import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Search icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Search = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSearch} {...props} />;
};

export default Search;
