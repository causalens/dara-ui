import { faChartColumn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChartColumn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChartColumn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChartColumn} {...props} />;
};

export default ChartColumn;
