import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaughBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaughBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaughBeam} {...props} />;
};

export default LaughBeam;
