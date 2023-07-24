import { faVoicemail } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Voicemail icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Voicemail = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVoicemail} {...props} />;
};

export default Voicemail;
