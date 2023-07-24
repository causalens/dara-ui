import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WandSparkles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WandSparkles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWandSparkles} {...props} />;
};

export default WandSparkles;
