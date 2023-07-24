import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SmileBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SmileBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSmileBeam} {...props} />;
};

export default SmileBeam;
