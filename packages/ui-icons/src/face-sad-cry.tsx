import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceSadCry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceSadCry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceSadCry} {...props} />;
};

export default FaceSadCry;
