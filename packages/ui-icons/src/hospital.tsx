import { faHospital } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hospital icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hospital = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHospital} {...props} />;
};

export default Hospital;
