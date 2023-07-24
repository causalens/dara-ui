import { faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SprayCanSparkles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SprayCanSparkles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSprayCanSparkles} {...props} />;
};

export default SprayCanSparkles;
