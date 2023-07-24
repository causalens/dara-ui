import { faBarChart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BarChart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BarChart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBarChart} {...props} />;
};

export default BarChart;
