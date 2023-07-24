import { faGrinBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinBeam} {...props} />;
};

export default GrinBeam;
