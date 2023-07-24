import { mdiElectricSwitchClosed } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A ElectricSwitchClosed icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const ElectricSwitchClosed = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiElectricSwitchClosed} {...props} />;
};

export default ElectricSwitchClosed;
