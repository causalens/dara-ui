import { faChartBar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChartBar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChartBar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChartBar} {...props} />;
};

export default ChartBar;
