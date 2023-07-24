import { faTurnUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TurnUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TurnUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTurnUp} {...props} />;
};

export default TurnUp;
