import { faPieChart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PieChart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PieChart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPieChart} {...props} />;
};

export default PieChart;
