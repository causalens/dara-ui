import { faDizzy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dizzy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dizzy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDizzy} {...props} />;
};

export default Dizzy;
