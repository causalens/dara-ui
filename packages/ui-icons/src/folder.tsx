import { faFolder } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Folder icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Folder = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolder} {...props} />;
};

export default Folder;
