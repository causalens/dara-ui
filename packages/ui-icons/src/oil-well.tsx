import { faOilWell } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * OilWell icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const OilWell = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faOilWell} {...props} />;
};

export default OilWell;
