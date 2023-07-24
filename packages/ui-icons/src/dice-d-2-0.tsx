import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceD20 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceD20 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceD20} {...props} />;
};

export default DiceD20;
