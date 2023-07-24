import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FeatherAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FeatherAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFeatherAlt} {...props} />;
};

export default FeatherAlt;
