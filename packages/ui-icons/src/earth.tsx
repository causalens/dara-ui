import { faEarth } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Earth icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Earth = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarth} {...props} />;
};

export default Earth;
