import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FrownOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FrownOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFrownOpen} {...props} />;
};

export default FrownOpen;
