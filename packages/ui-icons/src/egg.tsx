import { faEgg } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Egg icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Egg = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEgg} {...props} />;
};

export default Egg;
