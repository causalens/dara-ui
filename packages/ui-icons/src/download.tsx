import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Download icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Download = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDownload} {...props} />;
};

export default Download;
