import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Microphone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Microphone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrophone} {...props} />;
};

export default Microphone;
