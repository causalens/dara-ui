import { faAreaChart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AreaChart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AreaChart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAreaChart} {...props} />;
};

export default AreaChart;
