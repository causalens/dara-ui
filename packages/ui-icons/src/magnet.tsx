import { faMagnet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Magnet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Magnet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnet} {...props} />;
};

export default Magnet;
