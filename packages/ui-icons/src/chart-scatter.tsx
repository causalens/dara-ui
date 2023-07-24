import { mdiChartScatterPlot } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A ChartScatter Icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const ChartScatter = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiChartScatterPlot} {...props} />;
};

export default ChartScatter;
