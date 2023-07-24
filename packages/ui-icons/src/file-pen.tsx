import { faFilePen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FilePen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FilePen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilePen} {...props} />;
};

export default FilePen;
