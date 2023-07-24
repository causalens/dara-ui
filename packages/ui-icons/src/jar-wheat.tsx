import { faJarWheat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * JarWheat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const JarWheat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJarWheat} {...props} />;
};

export default JarWheat;
