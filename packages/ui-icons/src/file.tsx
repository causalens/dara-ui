import { faFile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * File icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const File = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFile} {...props} />;
};

export default File;
