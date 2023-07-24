import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SchoolFlag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SchoolFlag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSchoolFlag} {...props} />;
};

export default SchoolFlag;
