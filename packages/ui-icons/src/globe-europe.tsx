import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlobeEurope icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlobeEurope = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlobeEurope} {...props} />;
};

export default GlobeEurope;
