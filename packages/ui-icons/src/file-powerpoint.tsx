import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FilePowerpoint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FilePowerpoint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilePowerpoint} {...props} />;
};

export default FilePowerpoint;
