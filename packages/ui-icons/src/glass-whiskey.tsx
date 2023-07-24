import { faGlassWhiskey } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlassWhiskey icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlassWhiskey = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlassWhiskey} {...props} />;
};

export default GlassWhiskey;
