import { faVcard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Vcard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Vcard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVcard} {...props} />;
};

export default Vcard;
