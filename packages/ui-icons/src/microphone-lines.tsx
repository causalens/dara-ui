import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MicrophoneLines icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MicrophoneLines = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrophoneLines} {...props} />;
};

export default MicrophoneLines;
