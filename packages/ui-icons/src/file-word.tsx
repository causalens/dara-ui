import { faFileWord } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileWord icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileWord = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileWord} {...props} />;
};

export default FileWord;
