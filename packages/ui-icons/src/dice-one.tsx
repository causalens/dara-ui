import { faDiceOne } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceOne icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceOne = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceOne} {...props} />;
};

export default DiceOne;
