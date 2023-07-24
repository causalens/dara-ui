import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlobeAfrica icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlobeAfrica = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlobeAfrica} {...props} />;
};

export default GlobeAfrica;
