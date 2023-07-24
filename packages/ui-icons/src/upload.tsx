import { faUpload } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Upload icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Upload = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUpload} {...props} />;
};

export default Upload;
