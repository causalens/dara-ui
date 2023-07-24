import { faParachuteBox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ParachuteBox icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ParachuteBox = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faParachuteBox} {...props} />;
};

export default ParachuteBox;
