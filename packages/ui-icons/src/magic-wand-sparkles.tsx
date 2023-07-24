import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagicWandSparkles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagicWandSparkles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagicWandSparkles} {...props} />;
};

export default MagicWandSparkles;
