import { faFileCsv } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCsv icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCsv = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCsv} {...props} />;
};

export default FileCsv;
