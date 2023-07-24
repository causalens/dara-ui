import { faHandcuffs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Handcuffs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Handcuffs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandcuffs} {...props} />;
};

export default Handcuffs;
