import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlassChart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlassChart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlassChart} {...props} />;
};

export default MagnifyingGlassChart;
