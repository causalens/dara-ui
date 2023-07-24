import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BroadcastTower icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BroadcastTower = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBroadcastTower} {...props} />;
};

export default BroadcastTower;
