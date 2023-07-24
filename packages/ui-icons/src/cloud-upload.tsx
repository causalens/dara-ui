import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudUpload icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudUpload = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudUpload} {...props} />;
};

export default CloudUpload;
