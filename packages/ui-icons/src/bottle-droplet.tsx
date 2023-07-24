import { faBottleDroplet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BottleDroplet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BottleDroplet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBottleDroplet} {...props} />;
};

export default BottleDroplet;
