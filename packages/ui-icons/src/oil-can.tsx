import { faOilCan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * OilCan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const OilCan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faOilCan} {...props} />;
};

export default OilCan;
