import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceD6 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceD6 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceD6} {...props} />;
};

export default DiceD6;
