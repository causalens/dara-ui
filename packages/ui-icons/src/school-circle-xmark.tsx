import { faSchoolCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SchoolCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SchoolCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSchoolCircleXmark} {...props} />;
};

export default SchoolCircleXmark;
