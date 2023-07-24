import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HatWizard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HatWizard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHatWizard} {...props} />;
};

export default HatWizard;
