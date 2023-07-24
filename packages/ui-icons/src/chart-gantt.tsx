import { faChartGantt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChartGantt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChartGantt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChartGantt} {...props} />;
};

export default ChartGantt;
