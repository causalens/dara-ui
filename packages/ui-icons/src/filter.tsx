import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Filter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Filter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilter} {...props} />;
};

export default Filter;
