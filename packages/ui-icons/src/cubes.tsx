import { faCubes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cubes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cubes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCubes} {...props} />;
};

export default Cubes;
