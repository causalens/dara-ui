import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SearchLocation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SearchLocation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSearchLocation} {...props} />;
};

export default SearchLocation;
