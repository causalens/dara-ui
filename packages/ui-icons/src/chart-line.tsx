import { mdiChartBellCurveCumulative } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * ChartLine icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const ChartLine = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiChartBellCurveCumulative} {...props} />;
};

export default ChartLine;
