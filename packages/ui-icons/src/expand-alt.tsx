import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExpandAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExpandAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExpandAlt} {...props} />;
};

export default ExpandAlt;
