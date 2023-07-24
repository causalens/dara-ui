import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceSadTear icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceSadTear = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceSadTear} {...props} />;
};

export default FaceSadTear;
