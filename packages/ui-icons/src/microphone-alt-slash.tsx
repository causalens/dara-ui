import { faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MicrophoneAltSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MicrophoneAltSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrophoneAltSlash} {...props} />;
};

export default MicrophoneAltSlash;
