import { faGlassMartini } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlassMartini icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlassMartini = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlassMartini} {...props} />;
};

export default GlassMartini;
