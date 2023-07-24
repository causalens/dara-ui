import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckMonster icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckMonster = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckMonster} {...props} />;
};

export default TruckMonster;
