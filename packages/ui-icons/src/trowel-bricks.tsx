import { faTrowelBricks } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrowelBricks icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrowelBricks = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrowelBricks} {...props} />;
};

export default TrowelBricks;
