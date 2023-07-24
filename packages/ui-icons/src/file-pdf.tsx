import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FilePdf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FilePdf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilePdf} {...props} />;
};

export default FilePdf;
