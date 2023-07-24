import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Briefcase icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Briefcase = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBriefcase} {...props} />;
};

export default Briefcase;
