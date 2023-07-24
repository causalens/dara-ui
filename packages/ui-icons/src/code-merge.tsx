import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CodeMerge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CodeMerge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCodeMerge} {...props} />;
};

export default CodeMerge;
