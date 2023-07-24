import { faSkiing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Skiing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Skiing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSkiing} {...props} />;
};

export default Skiing;
