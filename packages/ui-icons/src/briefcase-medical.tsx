import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BriefcaseMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BriefcaseMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBriefcaseMedical} {...props} />;
};

export default BriefcaseMedical;
