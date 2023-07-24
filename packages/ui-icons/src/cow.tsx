import { faCow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCow} {...props} />;
};

export default Cow;
