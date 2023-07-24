import { faBottleWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BottleWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BottleWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBottleWater} {...props} />;
};

export default BottleWater;
