import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Minus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Minus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMinus} {...props} />;
};

export default Minus;
