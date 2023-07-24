import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SolarPanel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SolarPanel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSolarPanel} {...props} />;
};

export default SolarPanel;
