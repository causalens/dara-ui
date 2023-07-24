import { faMask } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mask icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mask = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMask} {...props} />;
};

export default Mask;
