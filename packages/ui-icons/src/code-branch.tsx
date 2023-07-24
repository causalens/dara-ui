import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CodeBranch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CodeBranch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCodeBranch} {...props} />;
};

export default CodeBranch;
