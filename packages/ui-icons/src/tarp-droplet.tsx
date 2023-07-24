import { faTarpDroplet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TarpDroplet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TarpDroplet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTarpDroplet} {...props} />;
};

export default TarpDroplet;
