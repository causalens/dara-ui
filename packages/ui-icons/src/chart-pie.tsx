import { faChartPie } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChartPie icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChartPie = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChartPie} {...props} />;
};

export default ChartPie;
