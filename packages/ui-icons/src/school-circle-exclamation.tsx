import { faSchoolCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SchoolCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SchoolCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSchoolCircleExclamation} {...props} />;
};

export default SchoolCircleExclamation;
