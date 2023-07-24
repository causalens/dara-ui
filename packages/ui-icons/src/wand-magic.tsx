import { faWandMagic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WandMagic icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WandMagic = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWandMagic} {...props} />;
};

export default WandMagic;
