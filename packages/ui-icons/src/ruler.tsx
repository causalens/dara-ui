import { faRuler } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ruler icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ruler = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRuler} {...props} />;
};

export default Ruler;
