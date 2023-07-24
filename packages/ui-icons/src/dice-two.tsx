import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceTwo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceTwo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceTwo} {...props} />;
};

export default DiceTwo;
