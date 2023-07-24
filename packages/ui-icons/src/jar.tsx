import { faJar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Jar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Jar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJar} {...props} />;
};

export default Jar;
