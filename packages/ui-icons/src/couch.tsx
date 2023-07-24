import { faCouch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Couch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Couch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCouch} {...props} />;
};

export default Couch;
