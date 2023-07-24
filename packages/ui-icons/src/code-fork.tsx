import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CodeFork icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CodeFork = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCodeFork} {...props} />;
};

export default CodeFork;
