import { faOutdent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Outdent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Outdent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faOutdent} {...props} />;
};

export default Outdent;
