import { faDollyFlatbed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DollyFlatbed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DollyFlatbed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDollyFlatbed} {...props} />;
};

export default DollyFlatbed;
