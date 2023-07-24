import { faTeeth } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Teeth icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Teeth = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTeeth} {...props} />;
};

export default Teeth;
