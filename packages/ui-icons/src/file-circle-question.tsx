import { faFileCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCircleQuestion icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCircleQuestion = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCircleQuestion} {...props} />;
};

export default FileCircleQuestion;
