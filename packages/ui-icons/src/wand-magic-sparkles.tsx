import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WandMagicSparkles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WandMagicSparkles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWandMagicSparkles} {...props} />;
};

export default WandMagicSparkles;
