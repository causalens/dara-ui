import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CodePullRequest icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CodePullRequest = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCodePullRequest} {...props} />;
};

export default CodePullRequest;
