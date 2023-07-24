import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneDeparture icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneDeparture = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneDeparture} {...props} />;
};

export default PlaneDeparture;
