import { faSchoolLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SchoolLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SchoolLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSchoolLock} {...props} />;
};

export default SchoolLock;
