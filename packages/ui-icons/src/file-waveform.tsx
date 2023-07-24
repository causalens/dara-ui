import { faFileWaveform } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileWaveform icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileWaveform = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileWaveform} {...props} />;
};

export default FileWaveform;
