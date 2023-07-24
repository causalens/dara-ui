import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileLines icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileLines = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileLines} {...props} />;
};

export default FileLines;
