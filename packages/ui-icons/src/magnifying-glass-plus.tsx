import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlassPlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlassPlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlassPlus} {...props} />;
};

export default MagnifyingGlassPlus;
