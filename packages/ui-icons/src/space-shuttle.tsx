import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SpaceShuttle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SpaceShuttle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpaceShuttle} {...props} />;
};

export default SpaceShuttle;
