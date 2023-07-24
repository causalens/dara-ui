import { faAtom } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Atom icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Atom = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAtom} {...props} />;
};

export default Atom;
