import { faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingWater} {...props} />;
};

export default HandHoldingWater;
