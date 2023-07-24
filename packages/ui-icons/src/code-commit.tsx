import { faCodeCommit } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CodeCommit icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CodeCommit = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCodeCommit} {...props} />;
};

export default CodeCommit;
