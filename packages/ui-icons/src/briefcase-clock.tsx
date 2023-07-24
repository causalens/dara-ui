import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BriefcaseClock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BriefcaseClock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBriefcaseClock} {...props} />;
};

export default BriefcaseClock;
