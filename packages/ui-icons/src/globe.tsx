import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Globe icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Globe = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlobe} {...props} />;
};

export default Globe;
