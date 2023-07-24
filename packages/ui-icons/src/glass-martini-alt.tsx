import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlassMartiniAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlassMartiniAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlassMartiniAlt} {...props} />;
};

export default GlassMartiniAlt;
