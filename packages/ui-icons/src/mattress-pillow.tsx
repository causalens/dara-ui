import { faMattressPillow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MattressPillow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MattressPillow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMattressPillow} {...props} />;
};

export default MattressPillow;
