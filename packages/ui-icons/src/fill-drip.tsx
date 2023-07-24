import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FillDrip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FillDrip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFillDrip} {...props} />;
};

export default FillDrip;
