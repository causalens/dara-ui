import { faGhost } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ghost icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ghost = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGhost} {...props} />;
};

export default Ghost;
