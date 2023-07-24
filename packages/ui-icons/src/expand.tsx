import { faExpand } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Expand icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Expand = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExpand} {...props} />;
};

export default Expand;
