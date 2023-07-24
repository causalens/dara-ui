import { faMouse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mouse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mouse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMouse} {...props} />;
};

export default Mouse;
