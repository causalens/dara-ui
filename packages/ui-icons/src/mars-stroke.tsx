import { faMarsStroke } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsStroke icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsStroke = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsStroke} {...props} />;
};

export default MarsStroke;
