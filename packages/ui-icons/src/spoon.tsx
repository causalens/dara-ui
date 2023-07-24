import { faSpoon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Spoon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Spoon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpoon} {...props} />;
};

export default Spoon;
