import { faChartArea } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChartArea icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChartArea = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChartArea} {...props} />;
};

export default ChartArea;
