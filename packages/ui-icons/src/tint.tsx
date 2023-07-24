import { faTint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTint} {...props} />;
};

export default Tint;
