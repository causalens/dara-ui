import { faAudioDescription } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AudioDescription icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AudioDescription = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAudioDescription} {...props} />;
};

export default AudioDescription;
