import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cross icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cross = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTimes} {...props} />;
};

export default Cross;
