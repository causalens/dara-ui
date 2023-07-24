import { faBandAid } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BandAid icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BandAid = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBandAid} {...props} />;
};

export default BandAid;
