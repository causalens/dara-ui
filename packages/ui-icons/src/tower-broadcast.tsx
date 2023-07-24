import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TowerBroadcast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TowerBroadcast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTowerBroadcast} {...props} />;
};

export default TowerBroadcast;
