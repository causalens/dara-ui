import { faFileMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileMedical} {...props} />;
};

export default FileMedical;
