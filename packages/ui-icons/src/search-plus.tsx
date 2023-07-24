import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SearchPlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SearchPlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSearchPlus} {...props} />;
};

export default SearchPlus;
