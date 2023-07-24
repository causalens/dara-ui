import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MicrophoneAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MicrophoneAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrophoneAlt} {...props} />;
};

export default MicrophoneAlt;
