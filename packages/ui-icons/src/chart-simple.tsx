import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChartSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChartSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChartSimple} {...props} />;
};

export default ChartSimple;
