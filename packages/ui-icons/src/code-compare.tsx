import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CodeCompare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CodeCompare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCodeCompare} {...props} />;
};

export default CodeCompare;
