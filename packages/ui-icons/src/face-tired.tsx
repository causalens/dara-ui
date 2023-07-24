import { faFaceTired } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceTired icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceTired = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceTired} {...props} />;
};

export default FaceTired;
