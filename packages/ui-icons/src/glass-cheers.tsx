import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlassCheers icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlassCheers = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlassCheers} {...props} />;
};

export default GlassCheers;
