import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceFrownOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceFrownOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceFrownOpen} {...props} />;
};

export default FaceFrownOpen;
