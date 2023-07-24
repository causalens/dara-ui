import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlassDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlassDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlassDollar} {...props} />;
};

export default MagnifyingGlassDollar;
