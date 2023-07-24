import { faPenRuler } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenRuler icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenRuler = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenRuler} {...props} />;
};

export default PenRuler;
