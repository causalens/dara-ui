import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlass} {...props} />;
};

export default MagnifyingGlass;
