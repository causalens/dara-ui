import { faTurnDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TurnDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TurnDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTurnDown} {...props} />;
};

export default TurnDown;
