import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChalkboardTeacher icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChalkboardTeacher = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChalkboardTeacher} {...props} />;
};

export default ChalkboardTeacher;
