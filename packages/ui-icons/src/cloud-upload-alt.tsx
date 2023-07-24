import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudUploadAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudUploadAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudUploadAlt} {...props} />;
};

export default CloudUploadAlt;
