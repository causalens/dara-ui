import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MicrophoneSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MicrophoneSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrophoneSlash} {...props} />;
};

export default MicrophoneSlash;
