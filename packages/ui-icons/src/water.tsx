import { faWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Water icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Water = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWater} {...props} />;
};

export default Water;
