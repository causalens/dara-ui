import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DriversLicense icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DriversLicense = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDriversLicense} {...props} />;
};

export default DriversLicense;
