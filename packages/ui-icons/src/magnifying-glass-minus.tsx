import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlassMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlassMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlassMinus} {...props} />;
};

export default MagnifyingGlassMinus;
