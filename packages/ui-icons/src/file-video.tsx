import { faFileVideo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileVideo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileVideo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileVideo} {...props} />;
};

export default FileVideo;
