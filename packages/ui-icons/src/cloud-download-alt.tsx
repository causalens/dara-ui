import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudDownloadAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudDownloadAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudDownloadAlt} {...props} />;
};

export default CloudDownloadAlt;
