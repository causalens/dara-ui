import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlassLocation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlassLocation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlassLocation} {...props} />;
};

export default MagnifyingGlassLocation;
