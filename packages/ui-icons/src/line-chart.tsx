import { faLineChart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LineChart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LineChart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLineChart} {...props} />;
};

export default LineChart;
