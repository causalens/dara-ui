import { faFileAudio } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileAudio icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileAudio = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileAudio} {...props} />;
};

export default FileAudio;
