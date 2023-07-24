import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GraduationCap icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GraduationCap = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGraduationCap} {...props} />;
};

export default GraduationCap;
