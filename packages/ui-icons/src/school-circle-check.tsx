import { faSchoolCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SchoolCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SchoolCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSchoolCircleCheck} {...props} />;
};

export default SchoolCircleCheck;
