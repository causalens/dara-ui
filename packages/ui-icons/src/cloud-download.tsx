import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudDownload icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudDownload = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudDownload} {...props} />;
};

export default CloudDownload;
