import { faLadderWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LadderWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LadderWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLadderWater} {...props} />;
};

export default LadderWater;
