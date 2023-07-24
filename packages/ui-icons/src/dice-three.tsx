import { faDiceThree } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DiceThree icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DiceThree = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiceThree} {...props} />;
};

export default DiceThree;
