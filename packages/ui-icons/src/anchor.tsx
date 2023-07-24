import { faAnchor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Anchor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Anchor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnchor} {...props} />;
};

export default Anchor;
